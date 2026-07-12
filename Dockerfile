```Dockerfile
# Stage 1: Build
FROM node:18.12.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:1.23.4
COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Health Check
HEALTHCHECK CMD curl --fail http://localhost/ || exit 1
```