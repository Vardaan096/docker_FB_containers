
# Use an official Node.js runtime with an Alpine Linux base
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

