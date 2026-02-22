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

2. (Optional) Configure the API URL. By default, the frontend calls `http://localhost:8000`. To use a different API:

```bash
cp env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_API_URL to your API base URL
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

## Vercel Deployment

The frontend is built for Vercel. Deploy with:

```bash
vercel
```

Set `NEXT_PUBLIC_API_URL` in your Vercel project environment variables to point to your deployed API.
