const express = require("express");
//create a route object
const weatherRouter = express.Router();

//seudo data
let data = [
  {
    activity: ["morning jog", "breakfast", "work", "lunch", "gym"],
    weather: "sunny",
  },

  {
    activity: ["work", "coffee break", "meetings", "dinner", "movie"],
    weather: "cloudy",
  },

  {
    activity: ["weekend", "hiking", "picnic", "reading", "gardening"],
    weather: "rainy",
  },
];

//GET retrieve the entire list
//if "get" and param "/list" both match, run the call back function.
weatherRouter.get("/list", (req, res) => {
  res.send(data);
  //req: info from front-end to back-end
  //   console.log(req);
});

//GET items by query parameter
//?activity=work
//param: /activities, call back: get clients' parameter
weatherRouter.get("/activities", (req, res) => {
  const activityToFind = req.query.activity;
  //error check: missing input
  if (!activityToFind) {
    return res.status(400).send("Activity parameter is missing");
  }

  //find the relevent items in the object:data.
  const foundItems = data.filter((item) => {
    return item.activity.includes(activityToFind);
  });

  // error check: []
  if (!foundItems.length) {
    return res.status(404).send("Activity not found");
  }
  res.send(foundItems);
});

//POST add a new item with a new weather type
weatherRouter.post("/activities", (req, res) => {
  // can use body transfer data, but must parse for the data transfered
  console.log("body", req.body);
  const { activity, weather } = req.body;
  if (!activity || !weather) {
    return res.status(400).send("Activity and weather are required");
  }
  const newActivity = { activity, weather };
  data.push(newActivity);
  res.status(201).send({
    msg: "Add activity seccessed",
  });
});

//GET activities baed on weather condition
// /(:condition )
//http://localhost:8000/api/activities/weather/rainy

weatherRouter.get("/activities/weather/:condition", (req, res) => {
  const weatherCondition = req.params.condition;
  const itemsWithCondition = data.filter((item) => {
    return item.weather === weatherCondition;
  });
  res.send(itemsWithCondition);
});

//PUT update activities
// /:condition

weatherRouter.put("/activities/weather/:condition", (req, res) => {
  const weatherCondition = req.params.condition;
  const newActivities = req.body.activity;
  const foundIndex = data.findIndex((item) => {
    return item.weather === weatherCondition;
  });
  if (foundIndex === -1) {
    return res.status(404).send("Weather condtion not found");
  }
  data[foundIndex].activity = newActivities;
  res.send({
    msg: "Activities updated successfully",
    updateWeather: data[foundIndex],
    data,
  });
});

//DELETE items based on weather condition
weatherRouter.delete("/activities/weather/:condition", (req, res) => {
  //假设condition是唯一的
  const weatherCondition = req.params.condition;
  const foundIndex = data.findIndex((item) => {
    return item.weather === weatherCondition;
  });

  if (foundIndex === -1) {
    return res.status(404).send("Weather condition not found");
  }
  const deletedWeather = data.splice(foundIndex, 1);
  res.send({
    msg: "Activities deleted successfully",
    deletedWeather: deletedWeather[0],
    data,
  });
});

module.exports = weatherRouter;
