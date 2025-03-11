// this is where we create our server app
// import express from "express";
const express = require("express");

const app = express();

const PORT = 3000;

// why need nodemon?
// dev tool - not used in production

app.get("/", (req, res) => {
  console.log("first get request");
  res.sendStatus(200);
});

app.get("/hello", (req, res) => {
  setTimeout(() => console.log("After 1 second"), 1000);
  res.status(200).send("hello world");
});

app.listen(PORT, () => console.log("Server is running"));
