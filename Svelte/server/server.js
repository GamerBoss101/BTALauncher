import { handler } from '../build/handler.js';
import http from 'http';
import express from 'express';
import cors from 'cors';

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(handler);

server.listen(5000, () => {
    console.log('listening on port http://localhost:5000');
});