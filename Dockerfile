FROM node:24-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile && yarn global add serve

COPY . .

RUN yarn build

EXPOSE 5000


CMD ["serve", "-s", "build", "-l", "5000"]
