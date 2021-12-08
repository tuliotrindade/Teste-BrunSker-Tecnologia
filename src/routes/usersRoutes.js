const express = require('express');

const userControllers = require('../controllers/usersController');
const validations = require('../middlewares/usersValidations')

const router = express.Router();

router.post('/', validations.validateCreation, userControllers.createUser);

/* router.post('/login', userControllers.login) */

module.exports = router;