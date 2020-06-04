'use strict';

const { db, toList } = require('./firebase.service');

const tasksCollection = db.collection('tasks');

const createTask = async (data) => {
	const now = new Date();
	data = { ...data, creationDate: now, modifiedDate: now }
	await tasksCollection.add(data);
}

const updateTask = async (userId, data) => {
	const now = new Date();
	data = { ...data, modifiedDate: now }
	await tasksCollection.doc(userId).update(data);
}

const removeTask = async (userId) => {
	await tasksCollection.doc(userId).delete();
}

const getTasksByUserId = async (userId) => {
	const snapshots = await tasksCollection
		.where('user_id', '==', userId).get();
	return toList(snapshots);
}

module.exports = {
	createTask,
	updateTask,
	removeTask,
	getTasksByUserId,
}