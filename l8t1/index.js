//http请求方法
//url.length has limit -- could lead to error
//GET query     example.com/articles/123?limit=20&name=ben&age=30 (filter )
//POST          no cache, safe. large size.
//params        example.com/articles/123 (123:param, unique)
//PUT           send to server and /or create new
//body

const express = require("express");
//after creating weatherRouter:
const weatherRouter = require("./weatherRouter");
//create a web server
const app = express();
const PORT = 8000;

//parse to Json
//if need to parse for weatherRouter data, must before app.use(weatherRouter) context
app.use(express.json());

//after creating weatherRouter:
//express use weatherRouter
app.use("/api", weatherRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//npx nodemon index.js
//route modules
