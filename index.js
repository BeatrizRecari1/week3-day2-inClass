import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use( express.json() );
app.use( cors() );
dotenv.config();

const PORT = process.env.PORT || 3030;


app.get("/", (req, res) => {
    res.send("this is a get method");
})

app.post("/post", (req, res) => {
    res.send("this is a post method");
})

app.put("/update", (req, res) => {
    res.send("this is a put method");
})

app.delete("/delete", (req, res) => {
    res.send("this is a delete method");
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})