### Stydy Project with quarkus (backend), nextjs (frontend) and nginx with api gateway/load balancer. ( in progress) 

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
docker-compose -f docker-compose-dev.yaml up --build 
```



### Run the application in production mode

```
docker-compose up --build 
```


### Layout 

https://github.com/frontendfunn/bootstrap-5-admin-dashboard-template

Install bootstrap 5 and bootstrap icons


### Exemples 

- https://github.com/marcuspaulo/quarkus-panache-car/blob/master/src/main/java/br/com/car/resource/CarV2Resource.java