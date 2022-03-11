import express from 'express';

import { logger, errorHandler } from './middlewares';
import { userRouter, bookRouter, authorRouter } from './router';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// routers
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/author', authorRouter);

// error handling
app.use(errorHandler);

// run server at port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
