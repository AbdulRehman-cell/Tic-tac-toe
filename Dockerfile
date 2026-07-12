# Use a multi-stage build to keep the final image lightweight
FROM nginx:1.23.4 AS build

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy static files to the Nginx html directory
COPY index.html game.css game.js ./

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]