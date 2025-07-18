```bash
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver
```

This will be a shell script + Docker image when the architecture is finalised.
