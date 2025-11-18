# Fusion Starter

A production-ready full-stack React application template with integrated Express server, featuring React Router 6 SPA mode, TypeScript, Vitest, Zod and modern tooling.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nlatuan187/zapier-20website)

**Ready to deploy!** See [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) for step-by-step instructions.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server (dev) / Serverless Functions (production)
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── App.tsx              # App entry point with SPA routing
└── global.css           # TailwindCSS theming and global styles

api/                      # Serverless API functions (Vercel/Netlify)
├── ping.ts              # Health check endpoint
└── demo.ts              # Demo endpoint

server/                   # Express API backend (local dev)
├── index.ts             # Main server setup
└── routes/              # API handlers

shared/                   # Types used by both client & server
└── api.ts               # Shared API interfaces
```

## Development Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server (client + server)
pnpm build      # Production build
pnpm test       # Run Vitest tests
pnpm typecheck  # TypeScript validation
```

## Key Features

### 🎨 Styling System
- **Primary**: TailwindCSS 3 utility classes
- **Theme**: Configure in `client/global.css`
- **UI Components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge`

### 🛣️ SPA Routing
- React Router 6 in SPA mode
- Routes defined in `client/App.tsx`
- `client/pages/Index.tsx` = home page

### 🔌 API Integration
- **Development**: Express server on port 8080
- **Production**: Serverless functions
- **Endpoints**: Prefixed with `/api/`
- **Type Safety**: Shared types via `@shared/api`

### 🚀 Deployment Options
- **Vercel**: Automatic deployment with serverless functions
- **Netlify**: Alternative deployment option
- **Traditional**: Node.js server deployment

## Adding Features

### New API Route

1. Create serverless function in `api/my-route.ts`:
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.json({ message: 'Hello!' });
}
```

2. Access at `/api/my-route`

### New Page Route

1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```

## Deployment

### Vercel (Recommended)
See [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) for complete instructions.

```bash
git push origin main
# Then import on vercel.com
```

### Netlify
Already configured with `netlify/functions/api.ts`

### Traditional Server
```bash
pnpm build
pnpm start
```

## Environment Variables

Create `.env` file:
```env
PING_MESSAGE=pong
```

## Architecture

- **Development**: Single-port (8080) with Vite + Express integration
- **Production**: Static frontend + Serverless API functions
- **TypeScript**: Full type safety across client, server, and shared code
- **Hot Reload**: Both client and server during development

## Documentation

- [AGENTS.md](AGENTS.md) - AI Agent instructions
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) - Vercel quick start

## License

MIT
