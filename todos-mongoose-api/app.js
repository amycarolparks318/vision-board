import express from 'express';
import listsRouter from './routes/lists.js';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use('/lists', listsRouter);


app.listen(port, () => console.log(`Todos App is listening on port ${port}`));