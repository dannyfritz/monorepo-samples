# pnpm

This repo is created to demonstrate a [pnpm](https://pnpm.io/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install pnpm. `npm install -g pnpm`
3. `pnpm install`

## Commands

### All Packages

`pnpm run build -r`

`pnpm run clean -r`

`pnpm run lint -r`

`pnpm run static-check -r`

`pnpm run unit-test -r`

### Run math-web

`pnpm run build --filter math-web...`

`pnpm run start --filter math-web --stream`

### Deploy math-web

`pnpm run build --filter math-web...`

`pnpm run deploy --filter math-web --stream`

### Deploy math-service

`pnpm run build --filter math-service...`

`pnpm run deploy --filter math-service --stream`
