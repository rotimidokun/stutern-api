import express from 'express';
import cors from 'cors';
import client from './database/index.js';
import { getUsers } from './queries/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

client.connect();

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
});

//create


//read
app.get('/users', getUsers);

//update

//delete
app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
