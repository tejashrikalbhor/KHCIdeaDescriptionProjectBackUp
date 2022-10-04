# KHCIdeaDescriptionProjectBackUp
***
Using Sequelize mysql database
***
Steps:
***

1. npm install --save sequelize        
2. npm install --save mysql2
3. npm install --save-dev sequelize-cli
4. npx sequelize-cli init
5. npx sequelize-cli model:generate --name Country --attributes name:string 
6. npx sequelize-cli db:migrate
7. npx sequelize-cli model:generate --name businessArea --attributes name:string  
8. npx sequelize-cli model:generate --name department --attributes name:string
9. npx sequelize-cli model:generate --name ideaDepartment --attributes name:string 
10. npx sequelize-cli model:generate --name classification1 --attributes ideaDepartmentId:integer,name:string 
11. npx sequelize-cli model:generate --name classification2 --attributes classification1Id:integer,name:string 
12. npx sequelize-cli model:generate --name classification3 --attributes businessAreaId:integer,name:string 

***