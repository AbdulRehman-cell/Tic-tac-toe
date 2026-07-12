# Start from a lightweight Nginx image
FROM nginx:1.23.2-alpine as build

# Copy static files
COPY . /usr/share/nginx/html

# Use a minimal image to reduce size
FROM nginx:1.23.2-alpine

# Copy built files from the previous stage
COPY --from=build /usr/share/nginx/html /usr/share/nginx/html

# Health check for the running Nginx server
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost/ || exit 1

# Expose the server port
EXPOSE 80