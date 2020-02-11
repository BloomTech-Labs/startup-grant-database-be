const router = require('express').Router();
const usersRouter = require('../../routers/userRouter');

router.use('/users', usersRouter);

module.exports = router;
