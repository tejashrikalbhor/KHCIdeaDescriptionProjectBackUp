# KHCIdeaDescriptionProjectBackUp
Using Sequelize mysql database
Steps:

npm install --save sequelize        
npm install --save mysql2
 npm install --save-dev sequelize-cli
npx sequelize-cli init
npx sequelize-cli model:generate --name Country --attributes name:string 
 npx sequelize-cli db:migrate
npx sequelize-cli model:generate --name businessArea --attributes name:string  
npx sequelize-cli model:generate --name department --attributes name:string
npx sequelize-cli model:generate --name ideaDepartment --attributes name:string 
npx sequelize-cli model:generate --name classification1 --attributes ideaDepartmentId:integer,name:string 
npx sequelize-cli model:generate --name classification2 --attributes classification1Id:integer,name:string 
npx sequelize-cli model:generate --name classification3 --attributes businessAreaId:integer,name:string 
