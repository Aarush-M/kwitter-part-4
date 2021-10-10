var firebaseConfig = {
    apiKey: "AIzaSyDdMukUvj5yqoOFhJM4lghjrLJx_7hX_as",
    authDomain: "chat-doc-app-2.firebaseapp.com",
    databaseURL: "https://chat-doc-app-2-default-rtdb.firebaseio.com",
    projectId: "chat-doc-app-2",
    storageBucket: "chat-doc-app-2.appspot.com",
    messagingSenderId: "176361417340",
    appId: "1:176361417340:web:e34280387ef81b3fd337f9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";

function addRoom() {
    room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child("room-name").update({
  purpose: "Adding Room Name"
});
localStorage.setItem("room_name", room_name);
  window.location="kwitter_chatRoom.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row; 
      });
    });
  }
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
  }