// Initialize Firebase
var config = {
	apiKey: "AIzaSyBOVTbM8zOFUqKlDtMILX62QDa46I7d1a0",
	authDomain: "employeetimesheet-e204d.firebaseapp.com",
	databaseURL: "https://employeetimesheet-e204d.firebaseio.com",
	projectId: "employeetimesheet-e204d",
	storageBucket: "employeetimesheet-e204d.appspot.com",
	messagingSenderId: "194453856143"
};

firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function(){
	alert(database);
});