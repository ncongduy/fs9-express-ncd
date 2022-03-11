import express from 'express';

const authorRouter = express.Router();

authorRouter.get('/', (req, res) => {
	res.send('get author information');
});

authorRouter.post('/', (req, res) => {
	res.send('create author');
});

authorRouter.put('/', (req, res) => {
	res.send('update author');
});

authorRouter.delete('/', (req, res) => {
	res.send('delete author');
});

export { authorRouter };
