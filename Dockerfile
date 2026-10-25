FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app/build /srv
