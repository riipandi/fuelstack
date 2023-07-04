<p align="center"><img src="./banner.svg" width="500" height="150" alt="Project Logo"></p>
<p align="center">
    <a href="https://github.com/riipandi/fuelstack/pulse">
        <img src="https://img.shields.io/badge/Contributions-welcome-blue.svg?style=flat-square" alt="Contribution welcome">
    </a>
    <a href="https://github.com/riipandi/fuelstack">
        <img src="https://img.shields.io/github/languages/top/riipandi/fuelstack?style=flat-square" alt="Top language">
    </a>
    <a href="https://aris.mit-license.org">
        <img src="https://img.shields.io/github/license/riipandi/fuelstack?style=flat-square" alt="License">
    </a>
</p>

## Introduction

A full-stack monorepo starter kit powered by [Turborepo](https://turborepo.org). Originally based on Turborepo
[example kitchen-sink](https://github.com/vercel/turborepo/tree/main/examples/kitchen-sink). This starter
kit is already pre-configured with essential components. Versioning and package publishing are handled by
[Changesets][changeset] and can be automated with GitHub Actions.

### Ingredients

- [Typescript](https://www.typescriptlang.org) for static type checking
- [NestJS](https://nestjs.com) for the REST or GraphQL API
- [Next.js](https://nextjs.org) for the frontend
- [Tailwind CSS](https://tailwindcss.com) for the styling frontend
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Minio](https://min.io/) for S3 storage backend

### Authentication

Instead of writing your own authentication mechanism, this project include [Authorizer](https://authorizer.dev) for
handling the authentication and authorization. Please refer to the [official project documentation](https://docs.authorizer.dev)
for more information.

### Prerequisite

1. Install Docker and Docker Compose : https://docs.docker.com/desktop
2. Install NestJS CLI : https://docs.nestjs.com/cli/overview
3. Install Prisma CLI : https://www.prisma.io/docs/concepts/components/prisma-cli/installation

## Quick Start

```sh
# Using npx
npx create-turbo@latest -e riipandi/fuelstack

# Using yarn
yarn dlx create-turbo@latest -e riipandi/fuelstack

# Using pnpm
pnpm dlx create-turbo@latest -e riipandi/fuelstack
```

### Changing The Organization Scope

The organization scope for this starter is `@acme`. To change this, you'll need to do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope.
- Search and replace `acme` string with your desired scope.

### Generate Secret Key

Before you continue, you need to create `.env` file (you can duplicate `.env.example`) and
fill the `application secret key` with some random string. To generate a secret key, use
the following command:

```sh
openssl rand -base64 500 | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1
```

### Up and Running

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en) as a package manager.

```sh
pnpm install       # Installing dependencies
pnpm dev           # Start app in development
```

According to [Turborepo](https://turborepo.org/docs/features/scopes) documentation,
you can run or build single package using these command:

```sh
pnpm dev --scope=web      # Running the web in development mode
pnpm build --scope=api    # Building the NestJS api package
```

### Default Application Ports

| Package Name | Description            | Address               |
| ------------ | ---------------------- | --------------------- |
| Next.js      | Website / frontend     | http://localhost:3000 |
| NestJS       | Application backend    | http://localhost:3030 |
| Authorizer   | Authentication Service | http://localhost:8080 |

The default Authorizer admin secret is: `secret`, but you can define your own.

To do that, edit the `.env` file in the root project directory.

For detailed explanation of how things work, check out their official documentation.

### Turborepo Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/features/remote-caching)
to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel.
If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
# Authenticate the Turborepo CLI with your Vercel account
npx turbo login

# Link your project to your Remote Cache
npx turbo link
```

### Usefull Commands

This starter contains a command line script to help you manage the project such as running
the PostgreSQL, Redis, Mailhog, and Authorizer on Docker.

```sh
pnpm dev             # Develop all packages and the docs site
pnpm build           # Build all packages and the docs site
pnpm lint            # Lint all packages
pnpm changeset       # Generate a changeset
pnpm clean           # Clean up all node_modules and dist folders
```

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)][vercel-deploy]

### Vercel Deployment

You will need to configure a few things:

- Settings -> General -> Root Directory : `apps/web/`
- Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

Ignored Build Step configuration used to avoid rebuilding on Vercel when pushing the changes.
So, Vercel will deploy only when any changes on the specific directory.

### Cloudflare Deployment

You need to add `NODE_VERSION` with value `14.19.0` on the environment variables setting.

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets).
Please review their [documentation](https://github.com/changesets/changesets#documentation) to familarize
yourself with the workflow. If you want to publish package to the public npm registry and make them publicly
available, this is already setup. To publish packages to a private npm organization scope, **remove**
the following from each of the `package.json`'s

```diff
- "publishConfig": {
-   "access": "public"
- },
```

To use GitHub NPM Package Registry, please read the [Github npm registry documentation][github-npm-docs].

## Thanks to...

In general, I'd like to thank every single one who open-sources their
source code for their effort to contribute something to the open-source
community. Your work means the world! 🌍 ❤️

## Useful Links

Learn more about the power of Turborepo:

- [Turborepo documentation](https://turborepo.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [NestJS documentation](https://docs.nestjs.com)
- [Working with the Github npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
- [Authorizer documentation](https://docs.authorizer.dev)
- [Dockerizing a NestJS app with Prisma and PostgreSQL](https://notiz.dev/blog/dockerizing-nestjs-with-prisma-and-postgresql#perform-migrations-with-docker)
- [Prisma Migrate: Deploy Migration with Docker](https://notiz.dev/blog/prisma-migrate-deploy-with-docker#perform-migrations-with-docker)
- [Automating Changesets](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Fastify](https://fastify.dev/) server
- `website`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## License

This project is open-sourced software licensed under the [MIT license](https://aris.mit-license.org).

Copyrights in this project are retained by their contributors.
See the [license file](./license.txt) for more information.

[changeset]: https://github.com/changesets/changesets
[vercel-deploy]: https://vercel.com/new/clone?repository-url=https://github.com/riipandi/fuelstack&project-name=fuelstack&repo-name=fuelstack&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE
[github-npm-docs]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>
