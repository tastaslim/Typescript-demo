import { log } from "console";
import express from "express";
const app = express();
const port = 8000;
app.listen(() => {
   log(`Listening on port ${port}`) 
});