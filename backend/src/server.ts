import express from "express"
import dotenv from "dotenv"
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT);