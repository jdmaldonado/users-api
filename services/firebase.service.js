'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('../config/users-manager-jd-firebase-adminsdk.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://users-manager-jd.firebaseio.com'
});

const toList = (snapshot) => {
  if (snapshot) {
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } 
  return [];
}

module.exports = {
	toList,
	db: admin.firestore()
};