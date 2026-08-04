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
  try{
    const data = req.body;
    const postdata = await datamodule.create(data)
  res.status(201).json(postdata);
  }catch (err){
    console.log(err)
    res.status(500).json({message : err.message});
  }
});

connectDB().then((res) => {
    console.log("connection made successfully");

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`App is runing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });