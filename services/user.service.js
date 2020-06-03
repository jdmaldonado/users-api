'use strict';

const { db, toList } = require('./firebase.service');

const usersCollection = db.collection('users');

const createUser = async (eventData) => {
	await usersCollection.add(eventData);
}

const updateUser = async (userId, data) => {
	await usersCollection.doc(userId).update(data);
}

const removeUser = async (userId) => {
	await usersCollection.doc(userId).delete();
}

const getUsers = async () => {
	const snapshots = await usersCollection.get();
	return toList(snapshots);
}

module.exports = {
	createUser,
	updateUser,
	removeUser,
	getUsers,
}