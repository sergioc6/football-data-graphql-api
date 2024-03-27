FROM node:21

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

COPy .env.example .env

EXPOSE 8000

CMD [ "npm", "run", "start-dev" ]