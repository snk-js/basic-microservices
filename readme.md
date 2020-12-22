

# Basic microservices

This project uses 3 open ports in a docker system to listen to 
* mysql database server 
* graphql api-gateway server
* react app server

## This project uses
#### Frontend
React
Graphql
Antd
render mappings by lat and long using MapRequest

#### DevOps
Docker (and Docker Compose) last safe version

#### Database and server
Node.js ^12
MySQL ^2.2.5
Sequelize ^6.3.5

#### Backend
An api gateway for database using Graphql
Node.js

## Installation

### in main directory
```
docker-compose up
```
### in a separate terminal, inside classifieds-app
yarn
yarn watch
Deploy
Check out my video series for a step-by-step tutorial on how to deploy this.



