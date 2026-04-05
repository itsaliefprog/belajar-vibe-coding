import { Elysia } from 'elysia';
import { db } from './src/db';
import { users } from './src/schema';

const app = new Elysia()
  .get('/', () => {
    return { message: 'Hello World!' };
  })
  .get('/users', async () => {
    const allUsers = await db.select().from(users);
    return { users: allUsers };
  })
  .post('/users', async ({ body }: { body: { email: string; name: string } }) => {
    const [newUser] = await db.insert(users).values({
      email: body.email,
      name: body.name,
    });
    return { success: true, user: newUser };
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
