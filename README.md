### Steps to create a new project with quarkus

https://quarkus.io/

Extesion selected:

flyway, hibernate-orm, hibernate-orm-panache, hibernate-validator, jdbc-oracle, resteasy, resteasy-jsonb


### Steps to create a new project with nextjs

```
npx create-next-app@latest front-end-nextjs --ts
```



### Run the application in development mode

```
# start the database
docker-compose -f docker-compose-dev.yaml up
# start o backend
cd back-end-quarkus
./gradlew quarkusDev
# start the frontend
cd front-end-nextjs
yarn dev 
```