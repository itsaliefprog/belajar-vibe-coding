# Belajar Vibe Coding

A backend project built with Bun, Elysiajs, Drizzle ORM, and MySQL.

## Tech Stack
- **Runtime**: Bun
- **Framework**: Elysiajs
- **ORM**: Drizzle
- **Database**: MySQL

## Setup Instructions

### Prerequisites
- Bun installed on your system
- MySQL server running

### 1. Install dependencies:

```bash
bun install
```

### 2. Setup Database Configuration

Create `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update the database credentials in `.env`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=belajar_vibe
```

### 3. Generate Database Migrations

```bash
bun run db:generate
```

### 4. Run the Server

Development mode (with auto-reload):

```bash
bun run dev
```

Production mode:

```bash
bun run start
```

The server will start at `http://localhost:3000`

## API Endpoints

- **GET** `/` - Hello World endpoint
- **GET** `/users` - Get all users
- **POST** `/users` - Create new user (JSON body with `email` and `name`)

## Project Structure

```
.
├── src/
│   ├── db.ts          - Database connection setup
│   └── schema.ts      - Database schema definitions
├── drizzle/           - Generated migrations
├── index.ts           - Main server file
├── drizzle.config.ts  - Drizzle configuration
├── .env.example       - Environment variables template
├── tsconfig.json      - TypeScript configuration
└── package.json       - Project dependencies and scripts
```

---

This project was created using `bun init` in bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
