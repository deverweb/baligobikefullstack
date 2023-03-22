FROM node:16-alpine

RUN mkdir -p /var/www/html/front
WORKDIR /var/www/html/front

ENV HOST=0.0.0.0
ENV PORT=3000
ENV DOC_ID='1hPuTlodRw_hJdsG__4Hxn0av_dCgACiSqB7Tv_opcZM'

EXPOSE 3000

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
