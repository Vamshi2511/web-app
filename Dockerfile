# Use official Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first (for Docker cache)
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose app on port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
