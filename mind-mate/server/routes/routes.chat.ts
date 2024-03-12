import express from 'express';
import { Request, Response, NextFunction } from 'express';

const chatRouter = express.Router();

const rooms = {};

chatRouter.get('/', (req, res) => {
  res.render('index', { rooms });
});

export default chatRouter;
