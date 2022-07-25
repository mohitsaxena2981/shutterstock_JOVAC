import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWZkxqilSWrr_3kfMf4Kd9biEu7vx27KI",
    authDomain: "fir-ea053.firebaseapp.com",
    projectId: "fir-ea053",
    storageBucket: "fir-ea053.appspot.com",
    messagingSenderId: "966355249599",
    appId: "1:966355249599:web:0a1db587edb49de2d1990a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //Intialize variables
  const auth= firebase.auth()
  const database= firebase.database()
  
  function register(){
    email= document.getElementById('email').value
    password= document.getElementById('password').value
    full_name= document.getElementById('full_name').value
    movie_genre= document.getElementById('movie_genre').value
    if(validate_email(email)==false || validate_password(password)== false)
    {
        alert("Check email and password")
        return 
    }
    if(validate_field(full_name)||validate_field(movie_genre))
    {
        alert("Check credentials")
        return 
    }
    auth.createUserWithEmailandPassword(email,password)
    .then(function(){

        var user = auth.cuurentUser
        var database_ref= database.ref()
        var user_data ={
            email: email,
            full_name: full_name,
            movie_genre:movie_genre,
            last_login : Date.now()
        }
        database_ref.child('users/' + user.uid).set(user_data)
        alert('User Created')
    
    
    })
    .catch(function(error){
        var error_code= error.code
        var error_message= error.message
        alert(error_message)
    })


}
function login(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    if(validate_email(email)==false || validate_password(password)== false)
    {
        alert("Check email and password")
        return 
    }
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
        var user = auth.cuurentUser
        var database_ref= database.ref()
        var user_data ={
            last_login : Date.now()
        }
        database_ref.child('users/' + user.uid).update(user_data)
        alert('User Logged In') 
    })
    .catch(function(error){
        var error_code= error.code
        var error_message= error.message
        alert(error_message)
    })

}
function validate_email(email){
    expression= /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(str) == true){
        return true
    }
    else
    {
        return false
    }
}
function validate_password(password){
    if(password==null){
        return false;
    }
    if(password<8)
    {
        return false;
    }
    if(password>15)
    {
        return false
    }
    else{
        alert('Password is correct')
        return true
    }
}

function validate_field(field){
    if (field == null)
    {
        return false
    }
    if(field.length <=0)
    {
        return false
    }
    else
    {
        return true
    }
}
