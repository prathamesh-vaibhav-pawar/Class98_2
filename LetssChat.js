var firebaseConfig = {
  apiKey: "AIzaSyCelbjOdbC8Ze7sh8AaMJ4LWnAEmlf39CM",
  authDomain: "kwitter-page-aecc9.firebaseapp.com",
  databaseURL: "https://kwitter-page-aecc9-default-rtdb.firebaseio.com",
  projectId: "kwitter-page-aecc9",
  storageBucket: "kwitter-page-aecc9.appspot.com",
  messagingSenderId: "952389462961",
  appId: "1:952389462961:web:0f8e2faeff9b7e2c0fab90"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function CreateRoom(){
  RoomName = document.getElementById("Room_name").value 
  localStorage.setItem("RoomName",RoomName)
  firebase.database().ref("/").child(RoomName).update({
    Data:"Data Stored"
  })
  window.location = "RoomMain.html"
}
function MoveForward(){
  window.location = "RoomMain.html"
}