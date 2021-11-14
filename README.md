# monorepo-samples

This repo is created to demonstrate various TypeScript monorepo structures.

## Demonstrations

You can see each demonstration on these respective git branches:
* `lerna`
* `pnpm`
* `pnpm + lage`
* `pnpm + ultra-runner`
* `rush`

## Requirements

### Package Structure

* @infra/deploy-service
* @infra/deploy-web
* @infra/*shared-configs*
* apps/web-application <- @infra/deploy-web
* apps/web-application <- @infra/*shared-configs*
* apps/web-application <- button
* apps/web-application <- service-client
* packages/button <- @infra/*shared-configs*
* packages/math-util <- @infra/*shared-configs*
* packages/service-client <- @infra/*shared-configs*
* packages/service-client <- service
* services/math-service <- @infra/deploy-service
* services/math-service <- @infra/*shared-configs*
* services/math-service <- math-utils

### Package Requirements

#### All Packages

* "unit-test" - run Jest
* "lint" - run ESLint
* "static-analysis" - run TypeScript

#### apps/web-application

* "build" - Bundle for the browser
* "build:watch" - Support a development server
* "deploy" - Run a script that sleeps for 10s
* ESLint profile: Web
* TypeScript profile: Web

#### packages/button

* "build" - Bundle for the browser
* ESLint profile: Web
* TypeScript profile: Web

#### packages/math-util

* "build" - Bundle for Node
* ESLint profile: Node
* TypeScript profile: Node

#### packages/math-service-client

* "build" - Bundle for node
* ESLint profile: Node
* TypeScript profile: Node

#### services/math-service

* "build" - Support bundling for node
* "deploy" - Run a script that sleeps for 10s
* ESLint profile: Node
* TypeScript profile: Node
