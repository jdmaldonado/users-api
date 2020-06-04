const express = require('express');
const router = express.Router();
const { handleSucess, handleError } = require('../config/responses')
/** Services */
const { createUser, getUsers, updateUser, removeUser } = require('../services/user.service');

router.route('/')
	/* GET users listing. */
	.get(async (req, res) => {
		try {
			const users = await getUsers();
			handleSucess(res, users);
		} catch (error) {
			handleError(res, error);
		}
	})
	/* POST create user. */
	.post(async (req, res) => {
		const data = req.body;
		console.log(`data`, data);
		try {
			const user = await createUser(data);
			handleSucess(res, user);
		} catch (error) {
			handleError(res, error);
		}
	})

router.route('/:id')
	/* POST update user. */
	.post(async (req, res) => {
		const { id } = req.params;
		const data = req.body;
		try {
			const user = await updateUser(id, data);
			handleSucess(res, user);
		} catch (error) {
			handleError(res, error);
		}
	})
	/* GET users listing. */
	.delete(async (req, res) => {
		const { id } = req.params;
		try {
			const users = await removeUser(id);
			handleSucess(res, users);
		} catch (error) {
			handleError(res, error);
		}
	})

module.exports = router;