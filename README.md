# Boilerplate

## Installing

`Install using pnpm`

```bash
  pnpm install
  pnpm run dev
```

### Global Env

`./.env`

```bash
  SESSION_SECRET="31231231231"
  CODE_SECRET="3123131313131"
  SERVER_URL="http://localhost:3000"
```

### Database Env

`./packages/database/.env`

```bash
  DATABASE_URL="postgresql://test:B100dy50@localhost:5432/test"
```

### Packages

```bash
  @repo/db
  @repo/core
  @repo/crypto
  @repo/jwt
  @repo/typescript-config
  @repo/eslint-config
```

### Database Usage: `./packages/database/src/(client,services,index.ts)`

### Core Usage: `./packages/core/src/(types,response,middleware,handlers,exceptions)`
