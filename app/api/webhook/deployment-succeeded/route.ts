export async function POST(request: Request) {
  const res = await request.json();
  console.log({ res });
  return new Response(JSON.stringify({ res }), {
    headers: { "Content-Type": "application/json" },
  });
}
