// this is where we create our server app
// import express from "express";
const express = require("express");

const app = express();

const PORT = 8383;

app.listen(PORT, () => console.log("Server is running"));
