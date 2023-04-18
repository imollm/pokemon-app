![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png)
# POKEMON API

This repository contains an API to play with Pokemons. It has been builded with:

- NodeJS 💻
- Express ⚡
- Mongo 💿
- Mongoose 🐁
- Docker 🐳
- GraphQL 🍇

## Environment
You can run this API through:
- [Node and NPM](https://nodejs.org/es/download/) and [Mongo](https://www.mongodb.com/docs/manual/administration/install-community/) installed on your host.
- [Docker and Docker Compose](https://docs.docker.com/get-docker/)

You have to create two files in `config` folder
- `.env`
- `.env.development`

```bash
touch <project_path>/pokeapi/config/.env
```
If you run the API with Docker
```bash
echo "MONGODB_URI=mongodb://admin:password@mongo:27017" > <project_path>/pokeapi/config/.env.development
```
If you run the API with Node and Mongo with your localhost
```bash
echo "MONGODB_URI=mongodb://admin:password@localhost:27017" > <project_path>/pokeapi/config/.env.development
```

## Run with Docker
1. Open your Docker Desktop
2. `cd <project_path>/pokeapi`
3. `docker-compose up -d`
4. `docker-compose exec node npm run seed`

At this point you should have the API and Database running as a Docker containers.

![]('https://imgur.com/a/5kptodH')

And also the database seeded with 809 Pokemons!

## Run without Docker
1. `cd <project_path>/pokeapi`
2. `npm install`
3. `npm run seed`
4. `npm run dev`

## Postman
In the project you have [Postman](https://www.postman.com/downloads/) folder that contains:
- `[DEV]PokeAPI.postman_environment.json`
- `PokeAPI.postman_collection.json`

Import these files in Postman, and select the environment, then execute any request.

## GraphQL
If you want to play with GraphQL queries and mutations please visit this link:
```sh
http://localhost:8080/graphql
```

## Debug
If you want to debug with Docker you have to create a file and the copy the following JSON object.
1. `touch .vscode/launch.json`
2. ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Docker: Attach to Node",
                "type": "node",
                "request": "attach",
                "restart": true,
                "port": 9229,
                "address": "localhost",
                "localRoot": "${workspaceFolder}",
                "remoteRoot": "/usr/src/app",
                "protocol": "inspector"
            }
        ]
    }
    ```

3. If you have ran with Docker just play the debugger
4. If you are on localhost you have to run api with `npm run debug`

Have fun 🎉