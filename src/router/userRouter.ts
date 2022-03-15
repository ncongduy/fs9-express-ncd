import express from 'express';
import { ApiError } from '../middlewares';

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  try {
    res.send('get user information');
  } catch (error) {
    next(error);
  }
});

userRouter.post('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('create user');
  } catch (error) {
    next(error);
  }
});

userRouter.put('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('update user');
  } catch (error) {
    next(error);
  }
});

userRouter.delete('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('delete user');
  } catch (error) {
    next(error);
  }
});

export { userRouter };
