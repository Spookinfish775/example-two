FROM node:lts-alpine as build-stage

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

# se t app port
ENV NUXT_PORT=3000

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# upd ate and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app
RUN npm install

# start the app
CMD [ "npm", "start" ]