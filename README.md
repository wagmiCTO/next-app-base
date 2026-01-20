# next-app-base

Template project for web3 applications.

## Stack

- Next.js 16 + React 19
- Wagmi + Viem + RainbowKit (wallet connection)
- Zustand (state management)
- Tailwind CSS + Radix UI
- Biome (linting/formatting)
- Bun (runtime/package manager)

## Getting Started

```bash
cp env.example .env
bun install
bun dev
```

## Structure

```
src/
├── app/          # Next.js pages
├── components/   # UI components
├── lib/          # Utilities, types, constants
└── store/        # Zustand stores
```
