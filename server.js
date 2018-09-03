const express = require("express");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 5000;

hbs.registerPartials(__dirname + "/views/partials");

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now}:`);
  next();
});

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home.hbs", {
    title: "Home pagee",
    date: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.listen(port);
