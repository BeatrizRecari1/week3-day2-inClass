import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
    app.use(express.json() )
    app.use( cors () );
dotenv.config();

const PORT = process.env.PORT || 3030

// Serve images dir 
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("root");
})
app.use("/lolcat", express.static("images"))

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})