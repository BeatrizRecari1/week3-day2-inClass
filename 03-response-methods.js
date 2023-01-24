import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express();
app.use( express.json () )
app.use( cors() )
dotenv.config()

const PORT = process.env.PORT || 3030

app.get("/redirect", (req, res) => {
    res.redirect("http://bocacode.com")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})