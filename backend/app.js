import express from "express"
import datamodule from "./Schema.js";
import connectDB from "./Database.js";
import cors from "cors"


const app = express()
app.use (cors());
app.use(express.json())

app.get("/home", async (req, res) => {
  res.send("page not found ")
});

app.post("/formdata", async(req, res) => {
  try{
    
    const data = await
    datamodule.create(req.body);
  res.status(201).json(postdata);
  console.log("save data :", data)
  res.status(201).json({
    success : true,
    message : "data saved sucsessfully",
    data : data
  });
  }catch (error){
    console.log("database error",error)
    res.status(500).json({
      success : false,
      message : error.message
    });
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