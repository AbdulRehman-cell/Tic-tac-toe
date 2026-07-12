# Deployment Guide

Follow these steps to deploy the application in under 5 minutes:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Build the Docker image:
   ```bash
   docker build -t my-static-site:1.0 .
   ```

3. Run the application with Docker:
   ```bash
   docker run -d -p 80:80 my-static-site:1.0
   ```

4. Access the application by going to `http://localhost` in your web browser.