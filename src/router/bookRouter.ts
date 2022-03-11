import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
	res.send('get book information');
});

bookRouter.post('/', (req, res) => {
	res.send('create book');
});

bookRouter.put('/', (req, res) => {
	res.send('update book');
});

bookRouter.delete('/', (req, res) => {
	res.send('delete book');
});

export { bookRouter };
