import { Request, Response, NextFunction } from 'express';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server, Socket } from 'socket.io';
import session from 'express-session';
import * as http from 'http';
import { Sequelize, DataTypes } from 'sequelize';
import axios from 'axios';
import bodyParser from 'body-parser';
import * as path from 'path';
import { createServer } from 'http';
import socketIo from 'socket.io';
import api from './routes/routes.index';
import chat from './routes/routes.chat';
import { sequelize, User } from './model/Main.ts';
//import { db } from './model';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

app.use(cors());
app.use('/api', api);
app.use('/chat', chat);

const httpServer = createServer(app); // Use createServer directly

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('client connected');
});

httpServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
