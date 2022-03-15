import express from 'express';
import { ApiError } from '../middlewares';

const bookRouter = express.Router();

bookRouter.get('/', (req, res, next) => {
  try {
    res.send('get book information');
  } catch (error) {
    next(error);
  }
});

bookRouter.post('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('create book');
  } catch (error) {
    next(error);
  }
});

bookRouter.put('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('update book');
  } catch (error) {
    next(error);
  }
});

bookRouter.delete('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('delete book');
  } catch (error) {
    next(error);
  }
});

export { bookRouter };
