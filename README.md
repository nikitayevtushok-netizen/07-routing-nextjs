# NoteHub

NoteHub is a notes application built with Next.js App Router, TypeScript, Axios,
TanStack Query, and CSS Modules. It supports server-rendered note data,
client-side filtering by tag, and intercepted note previews in a modal.

## Getting started

Install dependencies:

```bash
npm ci
```

Create a `.env.local` file in the project root and add your NoteHub API token:

```env
NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token
```

The token is required for local and production requests to the NoteHub API. Add
the same environment variable in the Vercel project settings before deploying.
Do not commit the actual token.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npx prettier --check .
npm run build
```
