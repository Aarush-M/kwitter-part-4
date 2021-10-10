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
    room_name=localStorage.getItem("room_name");

    function send() {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name, 
              message: msg,
              like: 0
        });
        document.getElementById("msg").value="";
  }

  function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
  }