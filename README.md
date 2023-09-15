# Bacon collector for CMSch Bacon app - collect locations from multiple devices and show them on a map.

## Getting Started

### Install dependencies:

```bash
yarn install
```
### Create .env.local with one of the following options
1. Create a .env.local based on .env.example.local and fill in the values.
2. Pull .env from Vercel. For this, you will need to link your Vercel account to the project.
You can do this by running `vercel link` in the project directory.
Then, you can pull the .env file by running `vercel env pull .env.local` or `yarn pull-env`.
This will create a .env.local file in the project directory.

### Generate Prisma client

```bash
yarn prisma generate
```
or
```bash
yarn generate
```

### Migrate Prisma database

```bash
yarn prisma migrate dev
```

### Start the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
