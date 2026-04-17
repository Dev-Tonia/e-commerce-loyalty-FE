# React + TypeScript + Vite — Setup Guide

## Step 1: Create The Project

```bash
# npm
npm create vite@latest loyalty-dashboard -- --template react-ts
cd loyalty-dashboard
npm install

# pnpm
pnpm create vite@latest loyalty-dashboard -- --template react-ts
cd loyalty-dashboard
pnpm install
```

---

## Step 4: Environment Variables

Create `.env` in the project root:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

Create `.env.example` and commit it instead of `.env`:

```env
VITE_API_BASE_URL=
```

---

## Step 6: Run The App

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

App runs at `http://localhost:5173`
