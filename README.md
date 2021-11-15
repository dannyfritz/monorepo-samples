# pnpm

This repo is created to demonstrate a [pnpm](https://pnpm.io/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install pnpm. `npm install -g pnpm`
3. `pnpm install`
4. `pnpm install -g lage`

## Commands

### All Packages

`lage build`

`lage clean`

`lage lint`

`lage static-check`

`lage unit-test`

### Run math-web

`lage start --scope math-web --no-deps --verbose`

### Deploy math-web

`lage deploy --scope math-web --no-deps --verbose`

### Deploy math-service

`lage deploy --scope math-service --no-deps --verbose`
