# Use Python 3.12 slim image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Set work directory
WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Copy uv project files
COPY pyproject.toml uv.lock* ./

# Install dependencies with uv
RUN uv sync --frozen

# Copy project files
COPY . .

# Create media directory for file uploads
RUN mkdir -p media/images/projects

# Make migrations if needed
RUN uv run python manage.py makemigrations

# Run migrations (creates SQLite database)
RUN uv run python manage.py migrate

# Collect static files (if any)
RUN uv run python manage.py collectstatic --noinput || echo "No static files"

# Expose port
EXPOSE 9000

# Run the Django development server
CMD ["uv", "run", "python", "manage.py", "runserver", "0.0.0.0:9000"]