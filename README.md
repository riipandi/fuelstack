<p align="center"><img src="./.github/banner.svg" width="500" height="150" alt="Project Logo"></p>
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

A full-stack monorepo starter kit powered by [Turborepo](https://turborepo.org), originally based on Turborepo
[example kitchen-sink](https://github.com/vercel/turborepo/tree/main/examples/kitchen-sink).

This starter kit is already pre-configured with some additional packages and tools, such as:

- [Typescript](https://www.typescriptlang.org) for static type checking
- [Fastify](https://fastify.dev) for the REST or GraphQL API
- [Next.js](https://nextjs.org) for the frontend
- [Tailwind CSS](https://tailwindcss.com) for the styling the frontend
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Minio](https://min.io/) for S3 storage backend

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Quick Start

### Prerequisites

1. Install Node.js `v18.16.1` or greater: https://nodejs.org/en/download
2. Install Docker and Docker Compose: https://docs.docker.com/desktop

### Setup New Project

```sh
# Using npx
npx create-turbo@latest -e https://github.com/riipandi/fuelstack

# Using yarn
yarn dlx create-turbo@latest -e https://github.com/riipandi/fuelstack

# Using pnpm
pnpm dlx create-turbo@latest -e https://github.com/riipandi/fuelstack
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

This turborepo uses [pnpm](https://pnpm.io) as a package manager.

```sh
pnpm install       # Installing dependencies
pnpm dev           # Start app in development
```

According to [Turborepo](https://turborepo.org/docs/features/scopes) documentation,
you can run or build single package using these command:

```sh
pnpm turbo run dev --filter=api...        # Running the Fastify API in development mode
pnpm turbo run dev --filter=admin...      # Running the admin React SPA in development mode
pnpm turbo run dev --filter=website...    # Running the web Next.js in development mode
```

For detailed explanation of how things work, check out their official documentation.

### Turborepo Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/features/remote-caching)
to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel.
If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
# Authenticate the Turborepo CLI with your Vercel account
pnpm dlx turbo login

# Link your project to your Remote Cache
pnpm dlx turbo link
```

### Usefull Commands

This starter contains a command line script to help you manage the project such as running
the PostgreSQL, Redis, and Mailpit on Docker.

```sh
pnpm dev          # Develop all packages and the docs site
pnpm build        # Build all packages and the docs site
pnpm lint         # Lint all packages
pnpm cleanup      # Clean up all node_modules and dist folders
```

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)][vercel-deploy]

### Vercel Deployment

You will need to configure a few things:

- Settings -> General -> Root Directory : `apps/website/`
- Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

Ignored Build Step configuration used to avoid rebuilding on Vercel when pushing the changes.
So, Vercel will deploy only when any changes on the specific directory.

### Cloudflare Deployment

You need to add `NODE_VERSION` with value `18.16.1` on the environment variables setting.

## Thanks to...

In general, I'd like to thank every single one who open-sources their
source code for their effort to contribute something to the open-source
community. Your work means the world! 🌍 ❤️

## Useful Links

Learn more about the power of Turborepo:

- [Turborepo documentation](https://turborepo.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [Fastify documentation](https://fastify.dev/docs/v4.13.x)
- [Working with the Github npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)

## License

This project is open-sourced software licensed under the [MIT license](https://aris.mit-license.org).

Copyrights in this project are retained by their contributors.
See the [license file](./license.txt) for more information.

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https://github.com/riipandi/fuelstack&project-name=fuelstack&repo-name=fuelstack&env=NEXT_PUBLIC_SITE_URL,DATABASE_URL,JWT_SECRET_KEY
[github-npm-docs]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>
