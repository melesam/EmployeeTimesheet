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

function saveEmployee()
{

	$("#submit").on("click", function(e)
	{
		e.preventDefault();										// stops the website from reloading and keeps forms active
		var name = $("#employeeNameId").val().trim();			// setting the user input in field #employeeNameId to var name and trimming extra spaces out, val will return the value in that id
		var role = $("#roleId").val().trim();
		var startDate = $("#startDateId").val().trim();
		var monthlyRate = $("#monthlyRate").val().trim();
		database.ref(employeesRef).push(						// pushing updated information to variables with key value pairs by reference
		{
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate
		});

		$("#employeeNameId").val("");							// clearing the field 
		$("#roleId").val("");									// clearing the field 
		$("#startDateId").val("");								// clearing the field 
		$("#monthlyRate").val("");								// clearing the field 
	});

}


function loadEmployees()
{
	database.ref(employeesRef).on("child_added", function(snapshot)		// child_added is used when retrieving a list of items from a database.  Value is pulling the entire contents but child will be triggered once for each child then each subsequent child.
<<<<<<< HEAD
	{																	// we are reading data from a database via snapshot.  This is passed with event callback like on or once
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		console.log(snapshot.val());									// val for snapshot will extract all the contents as an object from the snapshot
=======
	{							
		var tableRow = $("<tr>");

		var randomNumber = Math.floor(Math.random() * 255);

		tableRow.html(
			"<th> </th>"+
			"<td>"+ snapshot.val().name +"</td>"+
			"<td>"+ snapshot.val().role +"</td>"+
			"<td>"+ snapshot.val().startDate +"</td>"+
			"<td>"+ randomNumber +"</td>"+
			"<td>"+ snapshot.val().monthlyRate +"</td>"+
			"<td>"+ parseInt(snapshot.val().monthlyRate) * randomNumber +"</td>");										// we are reading data from a database via snapshot.  This is passed with event callback like on or once
		$("#tablebody").prepend(tableRow);									// val for snapshot will extract all the contents as an object from the snapshot
>>>>>>> 028a38a81d5460e7e44542a4e6d03659d2a4165e
	}, 
	function(err)
	{


$(document).ready(function()
{
	$("#tablebody").empty();
	saveEmployee();
	loadEmployees();
	
});