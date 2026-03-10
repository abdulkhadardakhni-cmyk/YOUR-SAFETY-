function sendSOS(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").innerHTML =
"Location: " + lat + ", " + lon;

});

}else{

alert("Geolocation not supported");

}

}

function submitReport(){

let issue = document.getElementById("issue").value;
let description = document.getElementById("description").value;

let photo = document.getElementById("photo").files[0];

if(photo){
alert("Report Submitted!\nIssue: " + issue + "\nDescription: " + description + "\nPhoto: " + photo.name);
}
else{
alert("Please upload a photo");
}

}

function sendSOS(){

if(navigator.geolocation){

navigator.geolocation.watchPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").innerHTML =
"Live Location: " + lat + ", " + lon;

let mapURL =
"https://www.google.com/maps?q=" + lat + "," + lon + "&output=embed";

document.getElementById("map").src = mapURL;

});

}
else{
alert("Geolocation not supported");
}

}

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "abdulkhadar2007" && password === "khadar0507"){

document.getElementById("loginMessage").innerHTML =
"Login Successful";

}
else{

document.getElementById("loginMessage").innerHTML =
"Wrong Username or Password";

}

}
