# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]