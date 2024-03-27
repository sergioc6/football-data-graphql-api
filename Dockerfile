FROM node:21

WORKDIR /api

COPY package*.json ./

RUN npm --legacy-peer-deps install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start-dev" ]