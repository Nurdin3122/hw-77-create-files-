import express from "express";
const Messages = express.Router();
import {imagesUpload} from "../multer";
import {MessageTWithoutId} from "../FilesMessages/type";
import MessageFile from "../FilesMessages/MessagesFile";

Messages.get("/",async  (req,res) => {
   const messages = await MessageFile.getMessages();
   return res.status(200).send(messages);
});

Messages.post("/",imagesUpload.single('image'),async  (req,res) => {
   const message: MessageTWithoutId = {
      author: req.body.author || "Anonymous",
      message: req.body.message,
      image: req.file ? req.file.filename : null,
   };

   if (!message.message) {
      return res.status(400).send({ error: "нет сообщений" });
   }

   const mess = await MessageFile.addMessage(message) || [];
   res.status(200).send(mess);
});
export default Messages