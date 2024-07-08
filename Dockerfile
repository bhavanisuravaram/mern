# Use Node.js version 20 as the base for building the application
FROM node:20 AS build

# Set the working directory
WORKDIR /client

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application with OpenSSL legacy provider enabled
# Setting NODE_OPTIONS environment variable
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

# Use the official Nginx image to serve the built application
FROM nginx:alpine

# Copy the build output to Nginx's default public directory
COPY --from=build /client/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
