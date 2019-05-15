var name = prompt("What's your name?", "gxdrgd");
var password;

(name == "admin") ? 
    (password = prompt("Enter the password", "")) : ((name == "null") ? 
        alert("Authentification cancelled") : alert("I don't know you"));
//alert(name);
if (name == "admin") (password == "password") ?
    alert("Welcome, admin!") : (password == null) ? 
        alert("Authentification cancelled") : alert("Incorrect password");
//alert(password);

