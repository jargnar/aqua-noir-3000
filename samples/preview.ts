// Velocity Noir color test
import { createServer } from "node:http";

type User = {
  id: number;
  name: string;
  role?: "admin" | "member";
};

const users: User[] = [
  { id: 1, name: "Suhas", role: "admin" },
  { id: 2, name: "Ada" },
];

export async function findUser(id: number): Promise<User | null> {
  const match = users.find((user) => user.id === id);
  return match ?? null;
}

const server = createServer(async (_request, response) => {
  const user = await findUser(1);
  response.writeHead(user ? 200 : 404, { "content-type": "application/json" });
  response.end(JSON.stringify({ user, ready: true, latency: 12.5 }));
});

server.listen(3000, () => console.log("http://localhost:3000"));
