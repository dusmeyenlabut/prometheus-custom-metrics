import express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { MainRouter } from './routes';

const app: Application = express();
app.use(bodyParser.json());
app.use('/', MainRouter);
export default app;