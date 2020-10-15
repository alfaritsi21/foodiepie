<h1 align="center">ExpressJS - Foodiepie RESTfull API</h1>

There are Restfull API for product, product category, order, and history. In this website you can order some available menu. With Foodiepie you can see the order history from history page and you can maintain the transaction on foodiepie. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name foodiepie, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3001/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost // Database Host
DB_ROOT=root // Database Root
DB_PASSWORD= // Password set for database is empty
DB_DATABASE=foodiepie // Database
DB_PORT=3001 // PORT
DB_IP=127.0.0.1 // IP
```

## End Point

**See Documentation API [Here](https://documenter.getpostman.com/view/12330489/T1LQhRUd)**
