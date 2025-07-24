#!/bin/bash

echo "🔧 [build.sh] Installing dependencies..."
pip install -r requirements.txt

echo "🗄️ [build.sh] Running migrations..."
python manage.py migrate

echo "📦 [build.sh] Collecting static files..."
python manage.py collectstatic --noinput --clear

echo "✅ [build.sh] Build script finished successfully."