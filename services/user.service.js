'use strict';

const { db, toList } = require('./firebase.service');

const usersCollection = db.collection('users');

const createUser = async (data) => {
	const now = new Date();
	data = { ...data, creationDate: now, modifiedDate: now }
	await usersCollection.add(data);
}

const updateUser = async (userId, data) => {
	const now = new Date();
	data = { ...data, modifiedDate: now }
	await usersCollection.doc(userId).update(data);
}

const removeUser = async (userId) => {
	await usersCollection.doc(userId).delete();
}

const getUsers = async () => {
	const snapshots = await usersCollection.get()
	return toList(snapshots);
}

module.exports = {
	createUser,
	updateUser,
	removeUser,
	getUsers,
}