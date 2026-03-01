# BELG

**BELG** is a creative music collective where the echoes of the past meet the sound of the future.
We explore Belgian pop history, reimagining classic tracks from the '80s, '90s, and '00s to craft immersive compositions in Dolby Atmos.

Website: [belg.io](https://belg.io)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- **Orbitron** (Google Fonts)

## Local Development

```bash
npm install
npm run dev        # dev server on http://localhost:3000
```

## Production

```bash
npm run build
npm start          # production server on port 3000
```

Nginx reverse-proxies port 80 → 3000. See `nginx.conf` for the reference config.
