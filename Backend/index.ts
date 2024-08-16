import express from 'express';
import cors from 'cors';
import BetaRouter from "./Routers/BetaRouter";
import Messages from "./Routers/BetaRouter";

const app = express();
const port = 8030;

app.use(cors());
app.use(express.json());
app.use('/messages',Messages);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};
run().catch(console.error);