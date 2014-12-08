//<script src='https://cdn.firebase.com/js/client/1.1.1/firebase.js'></script>
//<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>

//JQuery
<script src='js/jquery.min.js'></script>

//FLatty Shadow
<script src='js/flattyshadow.js'></script>

//Firebase
//<script src='js/firebase.js'></script>
<script src="https://cdn.firebase.com/js/client/2.0.4/firebase.js"></script>

//Angular & AngularFire (works with Firebase)
//<script src="bower_components/angular/angular.js"></script>
//<script src="bower_components/angularfire/angularfire.js"></script>
<script src="https://cdn.firebase.com/libs/angularfire/0.9.0/angularfire.min.js"></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>

//Polymer & Material Design
<script src="bower_components/polymer/polymer.html"></script>
<script src="bower_components/webcomponentsjs/webcomponents.js"></script>
<link rel="import" href="bower_components/font-roboto/roboto.html">
<link rel="import" href="bower_components/paper-slider/paper-slider.html">
<link rel="import" href="bower_components/paper-radio-button/<paper-radio-button.html">

//Fat Secret API
<script src="http://platform.fatsecret.com/js?key=189d49a3cbeb417d9a52530c1b75d5b4"></script>
<script src="http://platform.fatsecret.com/js?key=189d49a3cbeb417d9a52530c1b75d5b4&auto_load=true"></script>


<script>

//Creating a Firebase Reference

//Firebase ref & writting data
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://angel-eats.firebaseio.com/");
myFirebaseRef.set({
  title: "Angel Eats!",
  author: "aissatech",
  location: {
    city: "Rome",
    region: "RM",
	  country: "Italy",
    zip: 00182
  }
});

//Firebase reading data
myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "Rome"
});

//Firebase: create user
myFirebaseRef.createUser({
  email    : "camelia.boban@gmail.com",
  password : "aissatech13"
}, function(error) {
  if (error === null) {
    console.log("User created successfully");
  } else {
    console.log("Error creating user:", error);
  }
});

//Firebase auth with pwd
myFirebaseRef.authWithPassword({
  email    : "camelia.boban@gmail.com",
  password : "aissatech13"
}, function(error, authData) {
  if (error === null) {
    // user authenticated with Firebase
    console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
  } else {
    console.log("Error authenticating user:", error);
  }
});

//Firebase changing pwd
myFirebaseRef.changePassword({
  email       : "camelia.boban@gmail.com",
  oldPassword : "aissatech13",
  newPassword : "taranto95"
}, function(error) {
  if (error === null) {
    console.log("Password changed successfully");
  } else {
    console.log("Error changing password:", error);
  }
});

//Firebase: sendind ped reset by email
myFirebaseRef.resetPassword({
    email : "camelia.boban@gmail.com"
  }, function(error) {
  if (error === null) {
    console.log("Password reset email sent successfully");
  } else {
    console.log("Error sending password reset email:", error);
  }
});

//Firebase delete user
myFirebaseRef.removeUser({
  email    : "camelia.boban@gmail.com",
  password : "aissatech13"
}, function(error) {
  if (error === null) {
    console.log("User removed successfully");
  } else {
    console.log("Error removing user:", error);
  }
});


</script>