// this is where we create our server app
// import express from "express";
const express = require("express");

const app = express();

const PORT = 3000;

// why need nodemon?
// dev tool - not used in production

//website endpoints - return html
app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

let data = {
  name: "abdul rahim",
  hehe: "learning",
};

// API endpoints - non visual (login)
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => console.log("Server is running"));
