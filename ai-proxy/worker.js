// Moon Sync AI Proxy — Cloudflare Worker
// Proxies requests to Google Gemini API so users don't need their own API key
// Deploy: wrangler deploy
// Set secret: wrangler secret put GEMINI_API_KEY

const ALLOWED_ORIGINS = [
  'https://bearman-ux.github.io',
  'http://localhost',
  'http://localhost:8080',
  'http://127.0.0.1'
];

// Rate limiting: max requests per IP per minute
const RATE_LIMIT = 10;
const rateLimitMap = new Map();

function isOriginAllowed(origin) {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed));
}

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip;
  const entry = rateLimitMap.get(key);

  if (!entry || now - entry.start > 60000) {
    rateLimitMap.set(key, { start: now, count: 1 });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': request.headers.get('Origin') || '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    const origin = request.headers.get('Origin') || '';
    const corsHeader = isOriginAllowed(origin) ? origin : ALLOWED_ORIGINS[0];

    // Only POST allowed
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsHeader }
      });
    }

    // Rate limit
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (!checkRateLimit(ip)) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again in a minute.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsHeader }
      });
    }

    // Get API key from environment
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'AI service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsHeader }
      });
    }

    try {
      const body = await request.json();

      // Forward to Gemini API
      const geminiResp = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        }
      );

      const data = await geminiResp.json();

      return new Response(JSON.stringify(data), {
        status: geminiResp.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': corsHeader
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Proxy error: ' + err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsHeader }
      });
    }
  }
};
