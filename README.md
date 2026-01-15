# How to run?

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install`
3. Set up environment variables in a `.env` file (you can copy `.env.example`)
4. Run the development server: `npm run dev`


## Current data flow

1. Fetch all users at once on server
2. Pass users to client
3. Calculate statistics
4. Add refresh functionality for client-side data fetching

# Section "Why?"

## Why NextJS?
### Better DX (e.g. for SSR [yet we do not really need it here IMO], deploy, routing [yet we might not need it here for 1 page app], data fetching etc). The biggest downside: tight coupling with Vercel for all the benefits / optimizations, there are some security issues from time to time
### Best alternative: React + Vite (for simple SPA) and the latest React router for navigation / SSR (but implementing SSR with that would require much more setup boilerplate code)

## Why Tailwind?
### I love tailwind. IMO the fastest and best way to deal with CSS nowadays (unless you use some specific tailwind-not-friendly libs like MUI)

## Why Shadcn/ui?
### Based on the Radix --> super accessability, interactivity and API. And it looks very very pleasant

## Why TanStack Query / React query?
### Next good for SSR data fetching. CSR data fetching with useEffect provides unpleasant DX, implementing with Redux Thunks is an overkill IMO and lacks such features as caching, easy loading states, pagination etc

## Why deploy to Vercel?
### Easy to deploy, good for this project (quick and easy). Tho we can use Docker and deploy whenever we want to (e.g. ECS)

## Why eslint-prettier?
### I like to have a single formatter for all the code


# Section "What would I add?"

## There were no requirements so it was not implemented:
- Tests (Vitest + React Testing Library and MSW / Nock for API integration tests)
- Dockerfile (for easier local development and production independent deployment)
- CI / CD pipeline for formatting / linting / tests etc (e.g. GitHub Actions)
- I DO NOT LIKE that we fetch all users at once cuz it would be an issue with lots of users (e.g. 2mil). I've already optimized the payload by requesting only fields we need tho ideally there should be endpoint to get aggregated data that is being calculated at the backend (e.g. once per day). We can use the API's limit / offset but we would lose the data for our statistics
- Installing CVA for better UI components (its variants)
