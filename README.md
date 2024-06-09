# Felix Vita App

## Project overview

This project is a full stack application using React+Typescript and Java+Springboot. It consists of a dashboard in which doctors have options such as monitoring their patients through statistics such as inflammation markers and an overall health score. Additionally, doctors are allowed to recommend the application via email or link. Finally, there is the option of messaging with patients.

### Frontend configuration

1. Enter in "frontend" folder
2. Run command "npm install"
3. Run command "npm run dev"

### Backend configuration

1. run this command "docker run --detach --env MYSQL_ROOT_PASSWORD=admin --env MYSQL_USER=admin --env MYSQL_PASSWORD=admin --env MYSQL_DATABASE=felixdb --name mysqlFelixDb --publish 3309:3306 mysql:8-oracle"
2. Open the Java project in some IDE (preferably IntelliJ)
3. Click on run icon
