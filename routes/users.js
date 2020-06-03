const express = require('express');
const router = express.Router();
const { handleSucess, handleError } = require('../config/responses')
/** Services */
const { getUsers } = require('../services/user.service');

/* GET users listing. */
router.get('/', async (req, res) => {
	try {
		const users = await getUsers();
		handleSucess(res, users);
	} catch (error) {
		handleError(res, users);
	}
});

module.exports = router;