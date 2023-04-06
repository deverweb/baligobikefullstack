FROM node:16-alpine

RUN mkdir -p /var/www/html/front
WORKDIR /var/www/html/front

ENV DTEST2=DTEST2


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
