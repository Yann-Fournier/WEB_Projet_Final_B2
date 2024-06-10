var nameTKT = document.getElementById('name');
var nameP = document.getElementById('nameP');
var email = document.getElementById('email');
var emailP = document.getElementById('emailP');
var password = document.getElementById('password');
var passwordP = document.getElementById('passwordP');
var verifPassword = document.getElementById('verifPassword');
var verifPasswordP = document.getElementById('verifPasswordP');
var correspPasswordP = document.getElementById('correspPassword');
var buInscription = document.getElementById('inscription');

buInscription.addEventListener('click', function () {
    var truc1 = false;
    var truc2 = false;
    var truc3 = false;
    var truc4 = false;
    var passwordEqual = false;

    if (nameTKT.value == "") {
        nameP.className = "para";
        truc1 = false;
    } else {
        nameP.className = "displayNone";
        truc1 = true;
    }

    if (email.value == "") {
        emailP.className = "para";
        truc2 = false;
    } else {
        emailP.className = "displayNone";
        truc2 = true;
    }

    if (password.value == "") {
        passwordP.className = "para";
        truc3 = false;
    } else {
        passwordP.className = "displayNone";
        truc3 = true;
    }

    if (verifPassword.value == "") {
        verifPasswordP.className = "para";
        truc4 = false;
    } else {
        verifPasswordP.className = "displayNone";
        truc4 = true;
    }

    if (password.value != verifPassword.value) {
        correspPasswordP.className = "para";
        passwordEqual = false;
    } else {
        correspPasswordP.className = "displayNone";
        passwordEqual = true;
    }

    if (truc1 && truc2 && truc3 && truc4 && passwordEqual) {
        // console.log(email.value);
        // console.log(password.value);

        // Faire la création de compte --------------------------------------------------------------
        // Puis récuperer le token et le boolean de la base de données ------------------------------

        document.cookie = "IsAdmin=" + ("valueIsAdmin" || "") + "; path=/";
        document.cookie = "Token=" + ("valueToken" || "") + "; path=/";
        window.location.href = 'index.html';
    }
});
