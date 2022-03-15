import express from 'express';
import { ApiError } from '../middlewares';

const authorRouter = express.Router();

authorRouter.get('/', (req, res, next) => {
  try {
    res.send('get author information');
  } catch (error) {
    next(error);
  }
});

authorRouter.post('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('create author');
  } catch (error) {
    next(error);
  }
});

authorRouter.put('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('update author');
  } catch (error) {
    next(error);
  }
});

authorRouter.delete('/', (req, res, next) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0)
      throw ApiError.badRequest('This field is required and must be non blank.');

    res.send('delete author');
  } catch (error) {
    next(error);
  }
});

export { authorRouter };
