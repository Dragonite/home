#!/bin/bash
echo "🗄️ [migrate.sh] Switching environment to production..."
export DEBUG=False
echo "🗄️ [migrate.sh] Running migrations..."
uv run python manage.py migrate
echo "✅ [migrate.sh] Database migration completed successfully."