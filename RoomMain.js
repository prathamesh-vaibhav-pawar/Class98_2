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

  UserName = localStorage.getItem("User_name")
  document.getElementById("User_Output").innerHTML = "Welcome " + UserName;

  function getData() {firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("Rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        var Row = "<div class='room_name' id =" +Room_names+" onclick = 'redirect(this.id)'>"+Room_names+"</div><hr>"
        document.getElementById("Rooms").innerHTML+= Row
        //End code
        });});}
  getData();
  
  function redirect(name){
        console.log(name)
        localStorage.setItem("Room_name",name)
        window.location = "kwitter_page.html"
  }
