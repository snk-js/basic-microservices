

# Considerations

Finally, after some days of work, I was planning to do full deployment using Terraform, aws (with ec2 instances) and codedeploy.
But, when It come it was already late, and, also, I was struggling with mounting that perfectly in one day, and then I aborted to do it. 
I think the project made in 6 days aprreciate 90% of what it requires, except CI/CD. Well, It was very funny, but, sincerely, I must search and study more about DevOps operations, and particularly speaking, I would love to learn more about but I'm still a little junior on that.

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
* Docker (and Docker Compose) last safe version

#### Database and server
* Node.js ^12
* MySQL ^2.2.5
* Sequelize ^6.3.5

#### Backend
* An api gateway for database using Graphql
* Node.js

## Installation

### in main directory
```
docker-compose up
```
## migration

#### in command line:
this command will enter the container of customers service
```
docker exec -it $(docker ps | grep 7100 | awk '{print $1}')
```
then, run this command:
```
yarn db:migrate
```
### in a separate terminal, inside react app
- yarn
- yarn start

### Routes in backend

* /mock - mock database with 1000 entries
* /clear-database - clear database
* /customers - list customers if filtered with city
* /customer - get customer by id with "?id={id}"
* /customers/count/city - group and agreggate customers by city



