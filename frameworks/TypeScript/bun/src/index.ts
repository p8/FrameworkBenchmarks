const HELLO_WORLD_STR = "Hello, World!";
const options: ResponseInit = { headers: { "Server": "Bun" } };

const server = Bun.serve({
  port: 8080,
  fetch(req: Request) {
    const { pathname } = new URL(req.url);

    if (pathname === "/json") {
      return Response.json({ message: HELLO_WORLD_STR }, options);
    }

    if (pathname === "/plaintext") {
      return new Response(HELLO_WORLD_STR, options);
    }

    return new Response("", { status: 404 })
  },
});

console.log(`Listening on localhost:${server.port}`);
