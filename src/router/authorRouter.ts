import express from 'express';

const authorRouter = express.Router();

authorRouter.get('/', (req, res) => {
	res.send('author router');
});

export { authorRouter };
