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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
document.getElementById("msg").value = "";
  }
  