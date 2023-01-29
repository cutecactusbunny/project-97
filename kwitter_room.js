
var firebaseConfig = {

      apiKey: "AIzaSyDN6_xiU3w7GNk1HkjSu-J21b6rUTFk_4U",
    
      authDomain: "kwitter-2a7a3.firebaseapp.com",
    
      databaseURL: "https://kwitter-2a7a3-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-2a7a3",
    
      storageBucket: "kwitter-2a7a3.appspot.com",
    
      messagingSenderId: "769946604764",
    
      appId: "1:769946604764:web:57edd8db77e81412315019",
    
      measurementId: "G-49MCX84L0X"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}