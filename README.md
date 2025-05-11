# 🎉 turborepo-express

This repository demonstrates a Turborepo monorepo setup with an Express.js-based REST API example. Database management is handled via Prisma ORM.

## 📁 Project Structure

```bash
.
├── apps
│   └── server         # Express.js API server
└── packages
    └── database       # Prisma schema and database operations

# Configuration files:
- deloyn.config.ts
- ecosystem.config.js (pm2)
- tsconfig.json, ESLint, Turborepo configs
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
# Install all dependencies
pnpm install
```

### 2. Database Setup

```bash
# In the project root, create a `.env.dev` file and add:
# DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"

# Run migrations and generate the Prisma client
pnpm db:migrate
```

### 3. Start Development Server

```bash
# Start all services from the project root
pnpm turbo run dev
```

The API server will be running at `http://localhost:3000`.

## 📦 Technologies Used

- Turborepo
- Node.js & Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- ESLint
- pm2 (ecosystem.config.js)

## 🛣️ API Endpoints

- GET `/api/turtles` : Fetch list of turtles

Detailed routes are located in the `apps/server/src/routes` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## 📜 License

MIT © This project
