# Quick Deployment Guide

Follow these steps to deploy the application in under 5 minutes:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

2. **Create a `.env` file**:
   Copy the `.env.example` to `.env` and add your configuration parameters:
   ```bash
   cp .env.example .env
   ```

3. **Build and start the application**:
   Using Docker Compose, run the following command:
   ```bash
   docker-compose up --build
   ```

4. **Check the application health** (Optional):
   Make sure the application is running by checking the health:
   ```bash
   docker ps  # check if the containers are up
   ```
   
5. **Access the application**:
   Navigate to `http://localhost` in your web browser.

You are now running the app in a Docker container!