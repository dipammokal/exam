const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors("*"));

app.use(express.json());

app.get("/",(request, response) => {
    response.write("Hello Sunbeam");
    response.end();
})

app.listen(5512,()=>{console.log("Listening at port 5512...")})