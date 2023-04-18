FROM node:16-alpine

RUN mkdir -p /var/www/html/front
WORKDIR /var/www/html/front

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
