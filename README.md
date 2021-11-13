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

### Dependency Structure

* web-application <- button
* web-application <- shared-types
* web-application <- math-utils
* web-application <- service-client
* web-application <- shared-configs
* service-client <- shared-types
* service-client <- shared-configs
* service <- shared-types
* service <- math-utils
* service <- shared-configs
* shared-configs

### Package Requirements

#### All Packages

* "test" - run Jest
* "lint" - run ESLint
* "static-analysis" - run TypeScript
* Use a shared Jest profile

#### web-application

* "build" - Bundle for the browser
* "build:watch" - Support a development server
* "deploy" - Run a script that sleeps for 10s
* ESLint profile: Web
* TypeScript profile: Web

#### button

* "build" - Bundle for the browser
* ESLint profile: Web
* TypeScript profile: Web

#### math-utils

* "build" - Bundle for Node
* ESLint profile: Node
* TypeScript profile: Node

#### service-client

* "build" - Bundle for node
* ESLint profile: Node
* TypeScript profile: Node

#### service

* "build" - Support bundling for node
* "deploy" - Run a script that sleeps for 10s
* ESLint profile: Node
* TypeScript profile: Node
