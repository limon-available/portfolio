# Md. Limon — Portfolio

A modern, professional, full-stack portfolio for **Md. Limon** — Full Stack MERN Developer,
Workflow Automation Specialist, and AI Integration Developer based in Tangail, Bangladesh.

The site is a responsive single-codebase project: a React + Vite frontend with a SaaS-style
design system and dark mode, backed by a Node + Express + MongoDB API that powers a working
contact form, per-project comments, and ratings.

---

## ✨ Features

- **Modern SaaS design** — consistent Tailwind design tokens, self-hosted Inter font, gradient
  accents, and reusable UI primitives.
- **Dark mode** — light/dark toggle persisted to `localStorage`, with a pre-paint script that
  prevents the flash of the wrong theme.
- **Fully responsive** — mobile-first layouts with a hamburger navigation menu.
- **Smooth animations** — Framer Motion page transitions (with `prefers-reduced-motion` support).
- **Working contact form** — client + server validation, saves to MongoDB, optional email
  notification on each submission.
- **Interactive projects** — per-project comments and ratings with optimistic UI updates;
  each visitor can rate a project once.
- **Performance & SEO** — route-level code-splitting (`React.lazy` + `Suspense`), per-page
  `<title>`/meta tags, Open Graph / Twitter cards, and an SVG favicon.
- **Accessibility** — keyboard-operable star rating, associated form labels, visible focus rings,
  semantic landmarks, and ARIA labels on icon-only controls.

---

## 🧱 Tech stack

| Layer    | Technologies |
|----------|--------------|
| Frontend | React 19, Vite 7, React Router 7, Tailwind CSS 3, Framer Motion, react-icons, react-type-animation |
| Backend  | Node.js, Express 4, Mongoose 8, express-validator, express-rate-limit, Nodemailer |
| Database | MongoDB (Atlas) |
| Tooling  | ESLint (flat config), @fontsource/inter |

---

## 📂 Project structure

```
portfolio/
├── index.html                 # SEO meta, favicon, pre-paint theme script
├── tailwind.config.js          # design tokens, dark mode, keyframes
├── src/                        # React app
│   ├── api/                    # fetch client + endpoint modules
│   ├── assets/                 # images (profile)
│   ├── components/
│   │   ├── ui/                 # Button, Card, Section, Field, PageWrapper,
│   │   │                       #   StarRating, ServiceCard, SkillBadge
│   │   ├── Navbar.jsx          # responsive nav + theme toggle
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx         # Suspense fallback
│   │   └── ProjectCard.jsx     # project + comments + ratings
│   ├── context/                # ThemeContext (dark mode)
│   ├── data/                   # profile, projects, skills, services (content)
│   ├── hooks/                  # useComments, useRating
│   ├── pages/                  # Home, About, Projects, Contact
│   ├── App.jsx                 # routes, lazy loading, page transitions
│   └── main.jsx
└── server/                     # Express + MongoDB API
    └── src/
        ├── config/             # env validation, db connection
        ├── models/             # Contact, Comment, Rating
        ├── controllers/        # request handlers
        ├── routes/             # contact + project routes
        ├── middleware/         # validate, honeypot, rate limiters, errors
        ├── utils/              # project slugs, voter-key hashing, mailer
        ├── app.js              # express app
        └── index.js            # entrypoint
```

---

## 🚀 Getting started

### Prerequisites

- Node.js 18+ and npm
- A MongoDB connection string (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) M0 cluster)

### 1. Backend (API)

```bash
cd server
npm install
cp .env.example .env        # fill in the values (see below)
npm run dev                 # → http://localhost:5000
```

Verify it's up:

```bash
curl http://localhost:5000/api/health
# {"data":{"status":"ok"},"error":null}
```

### 2. Frontend

In a second terminal, from the project root:

```bash
npm install
cp .env.example .env        # set VITE_API_BASE_URL=http://localhost:5000/api
npm run dev                 # → http://localhost:5173
```

---

## 🔑 Environment variables

### Frontend (`.env`)

| Variable            | Required | Description |
|---------------------|----------|-------------|
| `VITE_API_BASE_URL` | Yes      | Base URL of the API, e.g. `http://localhost:5000/api` |

### Backend (`server/.env`)

| Variable        | Required | Description |
|-----------------|----------|-------------|
| `PORT`          | No       | API port (default `5000`) |
| `MONGODB_URI`   | **Yes**  | MongoDB connection string |
| `VOTER_SALT`    | **Yes**  | Random secret used to hash voter IPs (so raw IPs are never stored) |
| `CLIENT_ORIGIN` | No       | Comma-separated allowed frontend origins for CORS (default `http://localhost:5173`) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | No | SMTP credentials for contact-email notifications. If unset, the form still works (DB only). |
| `CONTACT_TO`    | No       | Address that receives contact notifications |
| `CONTACT_FROM`  | No       | "From" address on the notification email |

---

## 📡 API reference

Base path: `/api`. All responses use a `{ data, error }` shape.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/health` | Liveness check |
| `POST` | `/api/contact` | Submit the contact form (→ DB + optional email) |
| `GET`  | `/api/projects/:slug/comments` | List comments (newest first, paginated via `?limit=&before=`) |
| `POST` | `/api/projects/:slug/comments` | Add a comment |
| `GET`  | `/api/projects/:slug/rating` | Get `{ average, count, yourRating }` |
| `PUT`  | `/api/projects/:slug/rating` | Cast/update your rating (one per visitor, upsert) |

**Anti-spam:** all write endpoints are IP rate-limited and protected by a honeypot field;
the ratings collection has a unique `{ projectSlug, voterKey }` index so each visitor's vote
counts once. `:slug` must be one of the known project slugs (see `server/src/utils/projects.js`).

---

## 📜 Scripts

| Location | Command | Description |
|----------|---------|-------------|
| root   | `npm run dev`     | Start the Vite dev server |
| root   | `npm run build`   | Production build to `dist/` |
| root   | `npm run preview` | Preview the production build |
| root   | `npm run lint`    | Lint frontend + backend |
| server | `npm run dev`     | Start the API in watch mode |
| server | `npm start`       | Start the API |

---

## ☁️ Deployment

- **Frontend** → Vercel / Netlify. Build command `npm run build`, output `dist/`.
  Set `VITE_API_BASE_URL` to your deployed API URL.
- **API** → Render / Railway. Set all `server/.env` variables and add your deployed frontend
  origin to `CLIENT_ORIGIN`. (Free tiers cold-start — the first request after idle may be slow.)
- **Database** → MongoDB Atlas (free M0 tier).

---

## ✅ Before going live

- [ ] Replace the placeholder profile image (`src/assets/profile.svg`) with a real photo.
- [ ] Set your real public email in `src/data/profile.js`.
- [ ] Fill in your institution and graduation year in `src/data/profile.js` (`education`).
- [ ] Generate a strong random `VOTER_SALT` for the backend.

---

## 📝 License

This project is for personal portfolio use. All rights reserved © Md. Limon.
