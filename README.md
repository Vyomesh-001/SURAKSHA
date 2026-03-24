# AARAMBCHAIN — Smart Tourist Safety (SIH demo)

Full-stack Next.js app: separate **Authority (Admin)** and **Tourist (User)** logins, SQLite + Prisma, JWT sessions, emergency SOS API, contact form, blockchain activity feed, and dashboards aligned with the tourist-safety UI you described.

## Quick start

```bash
cd tourist-safety
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo accounts

| Role | Email | Password |
|------|--------|----------|
| **Admin** | `admin@aarambchain.gov` | `rohan#1234` |
| **Tourist** | `john@demo.com` | `rohan#1234` |

Use **Login → Authority (Admin)** vs **Login → Tourist (User)** in the navbar — each flow hits a different API (`/api/auth/admin/login` vs `/api/auth/user/login`) and is rejected if the role does not match.

## Main routes

- `/` — Hero & feature preview  
- `/solution` — Solution, E-FIR link, emergency / IoT sections  
- `/login`, `/login/admin`, `/login/user` — Separate login entry points  
- `/dashboard` — Redirects by role to `/dashboard/admin` or `/dashboard/user`  
- `/dashboard/admin` — Authority metrics, activity feed, tourist registry  
- `/dashboard/user` — Personal onboarding status, geo-fencing mock, SOS link  
- `/emergency` — Panic button (`POST /api/emergency`)  
- `/geo` — Browser GPS → `POST /api/location`  
- `/blockchain` — On-chain activity list (Prisma)  
- `/contact` — Form → `POST /api/contact`  
- `/api/efir/sample` — Sample E-FIR JSON  

## Environment

Copy `.env` and set a long random `JWT_SECRET` for production. `DATABASE_URL` defaults to `file:./dev.db` (SQLite).

## Production build

If `npm run build` runs out of memory, the script already raises the Node heap; you can also try:

```bash
set NODE_OPTIONS=--max-old-space-size=8192
npm run build
```

On Linux/macOS: `export NODE_OPTIONS=--max-old-space-size=8192`.

Webpack dev cache is disabled in `next.config.mjs` to reduce RAM use on constrained PCs; re-enable the default cache if you have more memory and want faster rebuilds.

If the machine has very little RAM, run the app on another computer or use WSL/cloud — Next.js needs enough free memory to compile.

## Tech stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS  
- Prisma 5 + SQLite  
- `jose` (JWT, split sign/verify for Edge middleware)  
- `bcryptjs` for password hashes  
