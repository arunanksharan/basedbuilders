export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  console.log('Request received:');
  console.log(request);
  return new Response('GET /api/notify', { status: 200 });
}

export async function POST(request: Request) {
  console.log('Request received:');
  console.log(request);
  return new Response('GET /api/notify', { status: 200 });
}
