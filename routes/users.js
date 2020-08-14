var express = require('express');
var router = express.Router();

const userRouter = require('./userControlls/userControlls')

/* GET users listing. */
router.get('/', userRouter.head, userRouter.root);
router.get('/login', userRouter.head, userRouter.login);

router.post('/logout', userRouter.body, userRouter.logout);

module.exports = router;
