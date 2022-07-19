FROM node:16-alpine

COPY . /app
WORKDIR /app

RUN npm install
RUN npm install --global gulp-cli

EXPOSE 3000

CMD ["gulp", "start"]

