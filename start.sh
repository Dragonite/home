#!/bin/bash

# Script to build and run Django container
CONTAINER_NAME="home-backend"
IMAGE_NAME="django-home"
PORT="9000"

echo "🐳 Starting Django container setup..."

# Stop and remove existing container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "📦 Stopping existing container: $CONTAINER_NAME"
    docker stop $CONTAINER_NAME
    echo "🗑️  Removing existing container: $CONTAINER_NAME"
    docker rm $CONTAINER_NAME
fi

# Build the Docker image
echo "🔨 Building Docker image: $IMAGE_NAME"
cd server/
docker build -t $IMAGE_NAME .
cd ..

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Run the container
    echo "🚀 Starting container: $CONTAINER_NAME"
    docker run -d \
        --name $CONTAINER_NAME \
        -p $PORT:9000 \
        -v $(pwd)/server:/app \
        $IMAGE_NAME
    
    # Check if container started successfully
    if [ $? -eq 0 ]; then
        echo "✅ Container started successfully!"
        echo "🌐 Django is running at: http://localhost:$PORT"
        echo "📋 Container name: $CONTAINER_NAME"
        echo ""
        echo "📝 Useful commands:"
        echo "   View logs: docker logs $CONTAINER_NAME"
        echo "   Stop container: docker stop $CONTAINER_NAME"
        echo "   Remove container: docker rm $CONTAINER_NAME"
        echo "   Execute shell: docker exec -it $CONTAINER_NAME bash"
    else
        echo "❌ Failed to start container"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi