# Use a Node.js base image
FROM node:16.20.2-bullseye

# Specify the working directory inside the container
WORKDIR /app

# Install a specific version of npm (9.9.3)
RUN npm install -g npm@9.9.3

COPY . .

RUN npm install 

# bash as the default command
CMD ["npm", "run", "build-dev"]
