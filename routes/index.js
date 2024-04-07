const express = require('express');


const router = express.Router();
const studentRouter = require('./students');

router.use('/estudiante', studentRouter);



module.exports = router