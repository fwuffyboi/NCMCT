// express
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Test");
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})
