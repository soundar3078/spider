const firebaseConfig = {

    apiKey: "AIzaSyBbxbQpZL1pSMpAdCqbj3sEcVOPqZcKrOM",

    authDomain: "spidermanwebsite-f5401.firebaseapp.com",

    databaseURL: "https://spidermanwebsite-f5401-default-rtdb.firebaseio.com",

    projectId: "spidermanwebsite-f5401",

    storageBucket: "spidermanwebsite-f5401.appspot.com",

    messagingSenderId: "452052728914",

    appId: "1:452052728914:web:0059bbdfb79940e666338b"

  };


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference

var contactformDB = firebase.database().ref("contactform");

document.getElementById('contactform').addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();

    var name=getElementVal('name');
    var message = getElementVal('message');

   savemessages(name,message);

   document.querySelector(".alert").style.display= "block" ;

   setTimeout(()=>{
    document.querySelector(".alert".style.display= "none;")
   },3000);

   document.getElementById("contactform").reset();
}

const savemessages=(name,message)=>{
    var newContactForm = contactformDB.push();

    newContactForm.set({
        name:name,
        message:message,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}