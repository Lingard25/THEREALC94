const firebaseConfig = {
    apiKey: "AIzaSyBDRT9gYge95J0xsJ61yHxsyElrvdSJkGU",
    authDomain: "c94nvm.firebaseapp.com",
    databaseURL: "https://c94nvm-default-rtdb.firebaseio.com",
    projectId: "c94nvm",
    storageBucket: "c94nvm.appspot.com",
    messagingSenderId: "274468313395",
    appId: "1:274468313395:web:003722e3a6ecdf1fbc4646"
  };
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS
function ADDTHATUJERRR()
{
   var user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}