# Tech-Blog
Description

🔍 A MySQL database and CMS-style blog built using the Model-View-Controller (MVC) paradigm. Built using MySQL2, Express, Sequelize, Bulma, Handlebars, and dotenv.
![screenshots](./Screenshot%202025-03-26%20at%206.30.52 PM.png)
![screenshots](./Screenshot%202025-03-26%20at%206.31.07 PM.png)
![screenshots](./Screenshot%202025-03-26%20at%206.31.25 PM.png)
git clone https://github.com/liz0612/Tech-Blog.git
cd Tech-Blog
	2.	Install dependencies:
npm install
	3.	Set up your .env file:
Create a .env file in the root of your project and add your database credentials:
DB_NAME=tech_blog_db
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
	4.	Create the database (if not created yet):
    mysql -u root -p 
    then run :
    CREATE DATABASE tech_blog_db;
	5.	Seed the database:
    npm run seed
    Usage

💻

Run the following commands:
	1.	Start MySQL: mysql -u root -p
    Enter your password and source the schema:
    source db/schema.sql;
    Exit MySQL:
    quit;
    	2.	Run the Application:
        npm run start
        Or for development with auto-reload:
        npm run watch