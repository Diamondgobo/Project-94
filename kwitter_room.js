const firebaseConfig = {
    apiKey: "AIzaSyDZIlgmZWud5PpvFom60N1gLj6rOABvosY",
    authDomain: "reachme-6dacc.firebaseapp.com",
    databaseURL: "https://reachme-6dacc-default-rtdb.firebaseio.com",
    projectId: "reachme-6dacc",
    storageBucket: "reachme-6dacc.appspot.com",
    messagingSenderId: "144803490795",
    appId: "1:144803490795:web:539c905080d27c396d87ae",
    measurementId: "G-7ZH9BDBQ1X"
  };
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
function logout() {

    window.location = "index.html";
}