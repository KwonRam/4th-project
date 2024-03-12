import express from 'express';
import { Request, Response, NextFunction } from 'express';

const chatRouter = express.Router();

// Define a type for the rooms object
interface Rooms {
  [roomId: string]: {
    users: Record<string, unknown>; // Assuming users is an object with string keys
  };
}

const rooms: Rooms = {};

// Now TypeScript knows that rooms is an object where the keys are strings and the values have a 'users' property.
//라우터
chatRouter.get('/', (req, res) => {
  res.render('index', { rooms });
});
//방생성

chatRouter.post('/create', (req, res) => {
  const roomId = req.body.id;

  // Check if the roomId exists in the rooms object
  if (rooms[roomId] === undefined) {
    // Room doesn't exist, create it
    rooms[roomId] = { users: {} };
  }

  // Redirect to the created or existing room
  res.redirect(`/room/${roomId}`);
});

//방접속
chatRouter.get('/room/:id', (req, res) => {
  const roomId = req.params.id;
  res.render('room', { roomId: roomId });
});

export default chatRouter;
