# Deployment Instructions for the Static HTML/CSS/JS Site

## Steps to Deploy:

1. Ensure you have Docker installed on your machine. You can download it from [Docker's official site](https://www.docker.com/products/docker-desktop).

2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

3. Build the Docker image:
   ```bash
   docker-compose build
   ```

4. Run your application using Docker Compose:
   ```bash
   docker-compose up
   ```

5. (Optional) If you want to deploy to Render, ensure you have set up your Render account and the RENDER_API_KEY in your GitHub Secrets. The deployment will happen automatically when you push to the main branch.

6. Visit `http://localhost` in your browser to see your site in action!