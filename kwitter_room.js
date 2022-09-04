const firebaseConfig = {
  apiKey: "AIzaSyCxHXp4gKTEzlRZgKq8RFj9MZPZAkpWflA",
  authDomain: "kwitter-project-66e08.firebaseapp.com",
  databaseURL: "https://kwitter-project-66e08-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-66e08",
  storageBucket: "kwitter-project-66e08.appspot.com",
  messagingSenderId: "832133305180",
  appId: "1:832133305180:web:8211c5a3144d99a219e799",
  measurementId: "G-GJWWEK7PE2"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

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
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}