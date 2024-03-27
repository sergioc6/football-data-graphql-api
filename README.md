# Football Data GRAPHQL API

## Requirements
Make you sure that you have this tools installed in your computer:
- git
- docker
- docker-compose


## Configuration
Create a new enviroment file.

```sh
cd football-data-graphql-api
cp .env.example .env
```

Add your own env variables.

| ENV      | Meaning |
| -------- | ------- |
| FOOTBALL_DATA_API_TOKEN  | Add your own API TOKEN for use Football Data API    |


Create the containers
```sh
docker-compose up -d
```

### Database
Enter inside the db container
```sh
docker-compose exec app bash
```
#### Run migrations
```sh
npx sequelize-cli db:migrate
```

#### Run seeders
```sh
npx sequelize-cli db:seed:all
```

### Server Development
By default, the API must be running in localhost:8000/api

### TODO
- Add filters and order in Get List endpoints
- Add validations in each endpoint (express-validator)
- Add DB Transaction in import competition process.
- Add Unit Tests