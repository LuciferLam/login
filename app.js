(function(){

    const config ={
    apiKey: "AIzaSyAKy8MzBhDqsTD1mIUh7IRGGQYfV0SaZVs",
    authDomain: "enjoin-69503.firebaseapp.com",
    databaseURL: "https://enjoin-69503.firebaseio.com",
    projectId: "enjoin-69503",
    storageBucket: "enjoin-69503.appspot.com",
    messagingSenderId: "361420381404",
    appId: "1:361420381404:web:2560c42fe4bdedb547a819"
    };

    firebase.initializeApp(config);

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click', e=> {
        const auth = firebase.auth();
        const email = txtEmail.value;
        const pass = txtPassword.value;
        // Sign in 
        const promise =  auth.signInWithEmailAndPassword(email, 
            pass);
        promise.catch(e => console.log(e.message));
    })

    // Add Sign Up
    btnSignUp.addEventListener('click', e => {
        //Get email and pass
        //TODO: CHECK 4 REAL EMAILZ
        const auth = firebase.auth();
        const email = txtEmail.value;
        const pass = txtPassword.value;
        // Sign in 
        const promise =  auth.createUserWithEmailAndPassword(email, 
            pass);
        promise
        .catch(e => console.log(e.message));
    });

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        }else{
            console.log('no logger in ')
        }

    });


}());