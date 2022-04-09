// express
const express = require('express');
const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Cosmos-Cat's ExpressJS Server");
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})
