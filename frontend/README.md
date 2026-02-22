# Mental Coach — ChatGPT-Style Frontend

A Next.js chat UI that connects to the Mental Coach API. Built to resemble the ChatGPT interface with a sidebar, message bubbles, and input area.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (recommended: 20+)
- The API backend running at `http://localhost:8000` (see [api/README.md](../api/README.md))

## Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. **Required for local dev** — set the API URL. Create `.env.local`:

```bash
cp env.example .env.local
# Edit .env.local: NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Running Locally

1. Start the API backend (from the repo root):

```bash
uv run uvicorn api.index:app --reload
```

2. In another terminal, start the frontend:

```bash
cd frontend
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description                         |
| ------------- | ----------------------------------- |
| `npm run dev` | Start dev server (with hot reload)  |
| `npm run build` | Build for production              |
| `npm run start` | Start production server           |
| `npm run lint` | Run ESLint                         |

## Vercel Deployment (Monorepo)

This project deploys both the Next.js frontend and the Python API as a single Vercel project.

1. In **Vercel Project Settings → General → Root Directory**, set `frontend`.
2. Add environment variable: `OPENAI_API_KEY` (your OpenAI API key).
3. Leave `NEXT_PUBLIC_API_URL` unset — the frontend uses same-origin `/api/chat`.
4. Deploy: `vercel` or push to your connected Git repo.
