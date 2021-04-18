const auth = firebase.auth()

function signUp() {
    var email = document.getElementById("signUp_email");
    var password = document.getElementById("signUp_password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}

function signIn() {
    var email = document.getElementById("signIn_email");
    var password = document.getElementById("signIn_password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In " + email.value);


}
//Take user to a different or homepage
function signOut() {
    auth.signOut();
    alert("Signed Out")
}
auth.onAuthStateChanged(function(user) {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (user) {
        var email = user.email;
        alert("Active User " + email);
        if (page == "index.html") {
            window.location.href = "/home.html";
        }

        //is signed in
    } else {
        //alert your not sign in

        if (page == "home.html") {
            window.location.href = "/index.html";
        }
        //no user siged in
    }
});