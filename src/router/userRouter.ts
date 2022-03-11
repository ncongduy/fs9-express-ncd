import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
	res.send('get user information');
});

userRouter.post('/', (req, res) => {
	res.send('create user');
});

userRouter.put('/', (req, res) => {
	res.send('update user');
});

userRouter.delete('/', (req, res) => {
	res.send('delete user');
});

export { userRouter };
