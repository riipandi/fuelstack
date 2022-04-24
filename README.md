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

A full stack monorepo starter kit with [Turborepo](https://turborepo.org/), [Nest.js](https://nestjs.com/),
[Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com) and [Typescript](https://www.typescriptlang.org/).
This starter kit already pre-configured with [TailwindUI](https://tailwindui.com), [HeadlessUI](https://headlessui.dev/), 
[Framer Motion](https://www.framer.com/motion/), 
and some other goodies. Versioning and package publishing is handled by [Changesets][changeset] 
and fully automated with GitHub Actions.

Instead of writing your own authentication mechanism, this project include [Authorizer](https://authorizer.dev) for 
handling the authentication and authorization. Please refer to the [official project documentation](https://docs.authorizer.dev/) 
for more information.

## Quick Start

```bash
npx degit riipandi/fuelstack myapp-name
```

> Don't forget to change `myapp-name` with your real application name.

### Changing The Organization Scope

The organization scope for this starter is `@acme`. To change this, it's a bit manual 
at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope.
- Search and replace `acme` string with your desired scope.

### Prerequisite

1. Install Docker and Docker Compose : https://docs.docker.com/desktop
2. Install Nest.js CLI : https://docs.nestjs.com/cli/overview
3. Install Prisma CLI : https://www.prisma.io/docs/concepts/components/prisma-cli/installation

#### Generate Secret Key

```sh
openssl rand -base64 500 | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1
```

### Up and Running

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager.

```sh
# Prepare the environment
yarn stack up

# Install dependencies
yarn install 

# Start app in development
yarn dev
```

- Nest.js API will run at `http://localhost:3000`
- Next.js web will run at `http://localhost:3030`
- Authorizer will run at `http://localhost:8080`

The default Authorizer admin secret is: `secret`

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

### Stack Commandline

This starter include a commandline script to help you managing the project such us running the 
PostgreSQL, Redis, Mailhog, and Authorizer on Docker. To see all available commands type and hit 
enter this command in your terminal:

```sh
yarn stack --help
```

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)][vercel-deploy]

### Vercel Deployment

- Settings -> General -> Root Directory : `apps/web/`
- Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

### Cloudflare Deployment

You need to add `NODE_VERSION` with value `14.19.0` on the environment variables setting.

## Thanks to...

In general, I'd like to thank every single one who open-sources their
source code for their effort to contribute something to the open-source
community. Your work means the world! 🌍 ❤️

## Useful Links

Learn more about the power of Turborepo:

- [Turborepo documentation](https://turborepo.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [Nest.js documentation](https://docs.nestjs.com)
- [Working with the Github npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
- [Authorizer documentation](https://docs.authorizer.dev)
- [Dockerizing a NestJS app with Prisma and PostgreSQL](https://notiz.dev/blog/dockerizing-nestjs-with-prisma-and-postgresql#perform-migrations-with-docker)
- [Prisma Migrate: Deploy Migration with Docker](https://notiz.dev/blog/prisma-migrate-deploy-with-docker#perform-migrations-with-docker)

## License

This project is open-sourced software licensed under the [MIT license](https://aris.mit-license.org).

Copyrights in this project are retained by their contributors.
See the [license file](./license.txt) for more information.

[changeset]: https://github.com/changesets/changesets
[vercel-deploy]: https://vercel.com/new/clone?repository-url=https://github.com/riipandi/fuelstack&project-name=fuelstack&repo-name=fuelstack&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE
