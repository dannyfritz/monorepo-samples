# pnpm

This repo is created to demonstrate a [pnpm](https://pnpm.io/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install pnpm. `npm install -g pnpm`
3. `pnpm install`
4. `pnpm install -g lage`

## Commands

### All Packages

`pnpm run lage build`

`pnpm run lage clean`

`pnpm run lage lint`

`pnpm run lage static-check`

`pnpm run lage unit-test`

### Run math-web

`pnpm run lage build --scope math-web` (did not work)

`pnpm run start --filter math-web --stream`

### Deploy math-web

`pnpm run lage build --scope math-web` (did not work)

`pnpm run deploy --filter math-web --stream`

### Deploy math-service

`pnpm run lage build --scope math-service` (did not work, runs on everything)

`pnpm run deploy --filter math-service --stream`
