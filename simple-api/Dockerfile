# Get image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json files for installation
# The * copies the lock file as well
COPY package*.json ./

# Install our packages we just copied
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose the port we're listening on in www.js
EXPOSE 3000

# Run the server
CMD [ "npm", "run", "start" ]