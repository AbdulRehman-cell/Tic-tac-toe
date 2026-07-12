# Deployment Guide

Follow the steps below to deploy this application on Render:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Deploy the App**
   - Make sure you are authenticated with Render via the command line.
   - Run the following commands to deploy your app:
   ```bash
   docker build -t my-app:1.0 .
   render deploy my-app
   ```

3. **Access the App**
   - Once deployed, visit your app at `https://<your-render-app-name>.onrender.com`