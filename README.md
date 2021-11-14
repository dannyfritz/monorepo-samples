# Lerna

This repo is created to demonstrate a [Lerna](https://lerna.js.org/) monorepo structure.

## Setup

1. Install Node, npm, and npx. (All are installed with Node)
2. Install Yarn. (Usually from npm)
3. `yarn lerna bootstrap --strict` or `yarn bootstrap`

## Commands

### All Packages

`lerna run build`
`lerna run lint`
`lerna run static-analysis`
`lerna run unit-test`

### Run web-application

`lerna run build --scope web-application --include-dependencies`
`lerna run start --scope web-application`

### Deploy web-application

`lerna run build --scope web-application --include-dependencies`
`lerna run deploy --scope web-application`

## Deploy math-service

`yarn lerna run build --scope math-service --include-dependencies`
`lerna run deploy --scope math-service`
