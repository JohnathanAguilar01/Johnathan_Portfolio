# Use an official Node runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Build the project for production
RUN npm run build

# Expose the port your app runs on (adjust if needed)
# EXPOSE 3000

# Start the app (if you’re using Vite’s preview in production)
# CMD ["npx", "vite", "preview", "--port", "3000"]

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Optionally customize the Nginx configuration:
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
