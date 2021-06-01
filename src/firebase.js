import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyDik7dCdGfp9AQpl4a-WhGkfHIL5NuKkWM',
		authDomain: 'chat-app-8b75d.firebaseapp.com',
		projectId: 'chat-app-8b75d',
		storageBucket: 'chat-app-8b75d.appspot.com',
		messagingSenderId: '320979564395',
		appId: '1:320979564395:web:d1b6b2a25c30f3b40fbe2e',
	})
	.auth();
