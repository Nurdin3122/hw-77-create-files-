import express from "express";
const BetaRouter = express.Router();

BetaRouter.get("/",async  (req,res) => {
   res.send("Hello, world!!!")
});
export default BetaRouter