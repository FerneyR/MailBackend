const router=require('express').Router();

const createMailRoute =require('../create/mail');
const getUsers =require('../get/users');
const getMailBox=require('../get/mailbox')
const authUser=require('../auth/authentication');

router.use('/create',createMailRoute);
router.use('/get',getUsers);
router.use('/get',getMailBox);
router.use('/auth',authUser);
module.exports=router;