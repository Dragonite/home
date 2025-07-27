#!/bin/bash
echo "🗄️ [collectstatic.sh] Switching environment to production..."
export DEBUG=False
echo "🗄️ [collectstatic.sh] Exporting static files to S3..."
uv run python manage.py collectstatic --noinput --clear
echo "✅ [collectstatic.sh] Static files exported successfully."