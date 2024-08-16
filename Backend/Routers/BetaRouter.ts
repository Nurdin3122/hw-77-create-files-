import express from "express";
const Messages = express.Router();

Messages.get("/",async  (req,res) => {
   res.send("Hello, world!!!")
});

Messages.post("/",async  (req,res) => {
   res.send("Hello, world!!!")
});
export default Messages