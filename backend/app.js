import express from "express"
import datamodule from "./Schema.js";
import connectDB from "./Database.js";
import cors from "cors"


const app = express()
app.use (cors());
app.use(express.json())

app.get("/home", async (req, res) => {
  res.send("home sdffsdfdapi")
});

app.post("/formdata", async(req, res) => {
    const data = req.body;
    const postdata = await datamodule.create(data)
  res.send("data send");
});

connectDB().then((res) => {
    console.log("connection made successfully");

    app.listen(4000, () => {
      console.log("App us runing");
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });