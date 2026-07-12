# Use Node.js as the base image for building the application
FROM node:16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Second stage: create the production image
FROM nginx:1.23

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check to ensure the app is running
HEALTHCHECK CMD curl --fail http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]