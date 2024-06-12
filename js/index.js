// URL API
var baseURL = "http://localhost:8080";

// Bouton
var buLivres = document.getElementById('boutonLivres');
var buAuteurs = document.getElementById('boutonAuteurs');
var buUtilisateurs = document.getElementById('boutonUtilisateurs');

// Resultats
var divLivres = document.getElementById('resultatsLivres');
var divAuteurs = document.getElementById('resultatsAuteurs');
var divUtilisateurs = document.getElementById('resultatsUtilisateurs');


buLivres.addEventListener('click', function () {
    buLivres.className = "selectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "notSelectBouton";

    divLivres.className = "selectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "notSelectDiv";
});

buAuteurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "selectBouton";
    buUtilisateurs.className = "notSelectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "selectDiv";
    divUtilisateurs.className = "notSelectDiv";
});

buUtilisateurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "selectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "selectDiv";
});


fetch(baseURL + "/livre?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createLivre(json);
    });

function createLivre(json) {
    json.forEach(element => {
        var boutonLivre = document.createElement('button');
        boutonLivre.className = "buResultatLivre";
        boutonLivre.value = element.Id;

        // Ajout d'une action click pour tous les bouton
        boutonLivre.addEventListener('click', function () {
            var valeur = boutonLivre.value;
            window.location.href = "livre.html?Id=" + encodeURIComponent(valeur);
        });

        var imgLivre = document.createElement('img');
        imgLivre.className = "photoLivre";
        if (element.Photo == "" || element.Photo == null) {
            imgLivre.src = "../img/livre.png";
        } else {
            imgLivre.src = element.Photo;
        }

        var titreLivre = document.createElement('p');
        titreLivre.innerHTML = element.Nom;

        boutonLivre.appendChild(imgLivre);
        boutonLivre.appendChild(titreLivre);
        divLivres.appendChild(boutonLivre);
    });
}

fetch(baseURL + "/auteur?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createAuteur(json);
    });

function createAuteur(json) {
    json.forEach(element => {
        var boutonAuteur = document.createElement('button');
        boutonAuteur.className = "buResultatPersonne";
        boutonAuteur.value = element.Id;

        // Ajout d'une action click pour tous les bouton
        boutonAuteur.addEventListener('click', function () {
            var valeur = boutonAuteur.value;
            window.location.href = "auteur.html?Id=" + encodeURIComponent(valeur);
        });

        var imgAuteur = document.createElement('img');
        imgAuteur.className = "photoPerson";
        if (element.Photo == "" || element.Photo == null) {
            imgAuteur.src = "../img/default-profil-picture.png";
        } else {
            imgAuteur.src = element.Photo;
        }

        var nomAuteur = document.createElement('p');
        nomAuteur.innerHTML = element.Nom;

        boutonAuteur.appendChild(imgAuteur);
        boutonAuteur.appendChild(nomAuteur);
        divAuteurs.appendChild(boutonAuteur);
    });
}

fetch(baseURL + "/user?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createUtilisateur(json);
    });

function createUtilisateur(json) {
    json.forEach(element => {
        if (element.Is_Admin == false) {
            var boutonUtilisateur = document.createElement('button');
            boutonUtilisateur.className = "buResultatPersonne";
            boutonUtilisateur.value = element.Id;

            // Ajout d'une action click pour tous les bouton
            boutonUtilisateur.addEventListener('click', function () {
                var valeur = boutonUtilisateur.value;
                window.location.href = "profil.html?Id=" + encodeURIComponent(valeur);
            });

            var imgUtilisateur = document.createElement('img');
            imgUtilisateur.className = "photoPerson";
            if (element.Photo == "" || element.Photo == null) {
                imgUtilisateur.src = "../img/default-profil-picture.png";
            } else {
                imgUtilisateur.src = element.Photo;
            }

            var nomUtilisateur = document.createElement('p');
            nomUtilisateur.innerHTML = element.Nom;

            boutonUtilisateur.appendChild(imgUtilisateur);
            boutonUtilisateur.appendChild(nomUtilisateur);
            divUtilisateurs.appendChild(boutonUtilisateur);
        }
    });
}
