# pnpm

This repo is created to demonstrate a [pnpm](https://pnpm.io/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install pnpm. `npm install -g pnpm`
3. `pnpm install`
4. `pnpm install ultra-runner -g`

## Commands

### All Packages

`ultra -r build`

`ultra -r clean`

`ultra -r lint`

`ultra -r static-check`

`ultra -r unit-test`

### Run math-web

`ultra -r --filter "+apps/math-web" build`

`ultra -r --filter "apps/math-web" start`

### Deploy math-web

`ultra -r --filter "+apps/math-web" build`

`ultra -r --filter "apps/math-web" deploy`

### Deploy math-service

`ultra -r --filter "+services/math-service" build`

`ultra -r --filter math-service deploy`
