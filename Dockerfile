# Dockerfile

# 1. Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory in the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install production dependencies
RUN npm install --only=production

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Define the command to run the app
CMD [ "node", "app.js" ]