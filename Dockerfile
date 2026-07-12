# Use an official Nginx image as a base
FROM nginx:1.23.4-alpine AS base

# Remove the default server definition
RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

# Copy web files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY game.css /usr/share/nginx/html/
COPY game.js /usr/share/nginx/html/

# Final stage
FROM base