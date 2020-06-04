const express = require('express');
const router = express.Router();
const { handleSucess, handleError } = require('../config/responses')
/** Services */
const { createTask, getTasksByUserId, updateTask, removeTask } = require('../services/task.service');

router.route('/user/:userId')
	/* GET user tasks. */
	.get(async (req, res) => {
		const { userId } = req.params;
		try {
			const tasks = await getTasksByUserId(userId);
			handleSucess(res, tasks);
		} catch (error) {
			handleError(res, error);
		}
	})

router.route('/')
	/* POST create task. */
	.post(async (req, res) => {
		const data = req.body;
		try {
			const user = await createTask(data);
			handleSucess(res, user);
		} catch (error) {
			handleError(res, error);
		}
	})

router.route('/:id')
	/* POST update task. */
	.post(async (req, res) => {
		const { id } = req.params;
		const data = req.body;
		try {
			const task = await updateTask(id, data);
			handleSucess(res, task);
		} catch (error) {
			handleError(res, error);
		}
	})
	/* DELETE task */
	.delete(async (req, res) => {
		const { id } = req.params;
		try {
			const task = await removeTask(id);
			handleSucess(res, task);
		} catch (error) {
			handleError(res, error);
		}
	})

module.exports = router;