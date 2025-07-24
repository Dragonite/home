## Installation

### Requirements
- [Node.js 22.7.0](https://nodejs.org/en/download)
- [uv (Python 5.2.4 package manager)](https://github.com/astral-sh/uv)
- `.env` for `/server` with the following:
    - [AWS SDK Variables](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html)
    - **POSTGRES_URL**: Postgres connection string
- `.env` for `/client` with the following:
    - **DISCORD_WEBHOOK_URL**: Discord webhook for contact form.

### Client

```bash
cd client
npm i
npm run dev
```

### Server

```bash
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver
```

## System Architecture

![System Architecture](https://pub-71ac7586819344558e53d2bb77e0c626.r2.dev/architecture.png)

### Client (Frontend)

The frontend is written in **TypeScript** and uses **Next.js** as the framework. It makes use of **shadcn** + **Tailwind** for foundational components, and **Tanstack React Query** + **zod** for object validation and data fetching.

It's hosted on **Vercel** simply as a Next.js application, alongside a cron job that runs daily to verify the database is healthy, more about this later.

### Server (Backend)

The backend is written in **Python** using **Django REST Framework**, to serve REST API endpoints. Furthermore, **Django Admin** is enabled essentially allowing the backend to act as a content management system (CMS) for the portfolio.

With some tweaks, this is hosted on **Vercel**.

### Object/Media store

Files and images are hosted on the S3 compatible **Cloudflare R2**. This service has a very generous free tier, and can be swapped out for another S3 compatible service at any point.

### Database

A **Postgres** database is hosted using the free tier of **Supabase**. The database goes into hibernation if there's been no connections within a week, so a `/health` endpoint is added that is queried by the `client` daily to ensure healthiness of the instance.