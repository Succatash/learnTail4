import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

Deno.serve(app.fetch);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);
