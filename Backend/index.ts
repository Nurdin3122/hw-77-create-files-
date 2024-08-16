import express from 'express';
import cors from 'cors';
import Messages from "./Routers/MessagesRouter";

const app = express();
const port = 8030;

app.use(cors());
app.use(express.json());
app.use('/messages',Messages);
app.use(express.static('public'));

const run = async () => {
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};
run().catch(console.error);