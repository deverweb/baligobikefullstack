FROM node:16-alpine

RUN mkdir -p /var/www/html/front
WORKDIR /var/www/html/front


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
