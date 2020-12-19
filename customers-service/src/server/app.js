import bodyParser from 'body-parser'
import cors from "cors";
import express from "express";
import setupRoutes from './routes';

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}))

setupRoutes(app)

export default app