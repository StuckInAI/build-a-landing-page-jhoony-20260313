# My Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 💅 Tailwind CSS for styling
- 📱 Fully responsive design
- 🗄️ SQLite database with TypeORM (graceful fallback)
- 🐳 Docker-ready with standalone output
- ✅ Health check API endpoint

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t landing-page .
docker run -p 3000:3000 landing-page
```

## Environment Variables

Copy `.env` and adjust as needed:

```env
DATABASE_PATH=./data/app.db
NEXT_PUBLIC_SITE_TITLE=My Landing Page
```

## API Endpoints

- `GET /api/health` — Returns `{ status: "ok" }`

## Project Structure

```
├── src/
│   ├── app/          # Next.js App Router pages & API routes
│   ├── components/   # React components
│   ├── entities/     # TypeORM entities
│   └── lib/          # Database and utilities
├── public/           # Static assets
├── data/             # SQLite database (auto-created)
├── Dockerfile
├── next.config.ts
└── package.json
```
