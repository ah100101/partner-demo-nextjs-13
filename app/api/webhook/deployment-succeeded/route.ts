const crypto = require("crypto");

async function verifySignature(request: Request) {
  const payload = await request.text();
  const signature = crypto
    .createHmac("sha1", process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest("hex");
  return signature === request.headers.get("x-vercel-signature");
}

export async function POST(request: Request) {
  const headers = Array.from(request.headers.entries());

  const res = await request.json();

  const data = {
    res,
    headers,
    user: res?.payload?.user,
    team: res?.payload?.team,
  };

  console.log(JSON.stringify(data));

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
