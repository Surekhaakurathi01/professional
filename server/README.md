# Server (Express + Prisma)

This server is scaffolded for development using PostgreSQL and Prisma.

Quick setup (Windows PowerShell):

1. Install dependencies

```powershell
cd C:\professional\server
npm.cmd install
```

2. Create `.env` with your Postgres connection string (see `.env.example`):

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/professional_db?schema=public"
PORT=4000
```

3. Generate Prisma client

```powershell
npx prisma generate
```

4. Run the migration (creates tables)

```powershell
npx prisma migrate dev --name init
```

5. Start the dev server

```powershell
npm.cmd run dev
```

Notes:
- Make sure PostgreSQL is installed and the user/database exist or are creatable by your credentials.
- For quick testing you can create the DB using `createdb professional_db` (Postgres tools required).
- After the server runs, frontend requests to `/api/*` will be proxied in dev to `http://localhost:4000`.
