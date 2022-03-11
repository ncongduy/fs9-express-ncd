import express from 'express';
import { userRouter, bookRouter, authorRouter } from './router';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/author', authorRouter);

// error handling

// run server at port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});
