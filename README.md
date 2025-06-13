# MoneyCoach MA

Monorepo using pnpm with NestJS API and Flutter Web client.

## Prerequisites
- Node.js 18
- pnpm
- Flutter SDK
- Docker

## Setup
```bash
pnpm install
```

## Development
Start api and web with:
```bash
pnpm dev
```

## Local install Windows / Ubuntu
1. Install Node.js and pnpm
2. Install Flutter SDK and add to PATH
3. Clone repo and run `pnpm install`
4. Run `pnpm dev`

Docker services can be started with:
```bash
docker compose -f infra/docker-compose.yml up
```
