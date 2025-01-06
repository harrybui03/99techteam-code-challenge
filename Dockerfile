FROM node:22-alpine

# Set working directory
WORKDIR /node

# Copy only the necessary files for dependency installation
COPY package.json package-lock.json tsconfig.json ./

# Ensure dependencies are installed properly
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "dev"]
