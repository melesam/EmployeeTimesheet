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

var employeesRef = "/employees";

function saveEmployee(){

	$("#submit").on("click", function(e){
		e.preventDefault();
		var name = $("#employeeNameId").val().trim();
		var role = $("#roleId").val().trim();
		var startDate = $("#startDateId").val().trim();
		var monthlyRate = $("#monthlyRate").val().trim();
		database.ref(employeesRef).push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate
		});

		$("#employeeNameId").val("");
		$("#roleId").val("");
		$("#startDateId").val("");
		$("#monthlyRate").val("");
	});
}


function loadEmployees(){
	database.ref(employeesRef).on("child_added", function(snapshot){
		console.log(snapshot.val());
	}, function(err){
		console.log("Error occured" + err);
	});
}

$(document).ready(function(){

	saveEmployee();
	loadEmployees();
	
});