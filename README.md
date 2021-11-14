# Lerna

This repo is created to demonstrate a [Lerna](https://lerna.js.org/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install Yarn. `npm install -g yarn`
3. Install Lerna. `npm install -g lerna`
3. `lerna bootstrap --strict`

## Commands

### All Packages

`lerna run build`

`lerna run clean`

`lerna run lint`

`lerna run static-check`

`lerna run unit-test`

### Run web-application

`lerna run build --scope web-application --include-dependencies`

`lerna run start --scope web-application --stream`

### Deploy web-application

`lerna run build --scope web-application --include-dependencies`

`lerna run deploy --scope web-application --stream`

## Deploy math-service

`yarn lerna run build --scope math-service --include-dependencies`

`lerna run deploy --scope math-service --stream`
