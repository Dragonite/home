## Local installation

### Frontend

- Build using node 22.7.0

```bash
npm i
npm run dev
```

### Backend

- Django 5.2.4 with uv 0.8.0

```bash
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver
```