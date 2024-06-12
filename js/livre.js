// URL API
var baseURL = "http://localhost:8080";

// Récupération de l'Id dans l'url ou dans les cookie
var parametres = new URLSearchParams(window.location.search);
var IdLivre = parametres.get("Id");
if (IdLivre == null) {
    window.location.href = "index.html";
}

// Info livre
var divLivreInfos = document.getElementById('book-details');
var divInfo = document.getElementById('book-info');
// Pop up
var popUp = document.getElementById('collection');
var buCroix = document.getElementById('bouton-croix');
var buAjouterCollection = document.getElementById('buAjouterCollection');
// Com
var divCommentaires = document.getElementById('comments-section');
var buAjouterCommentaire = document.getElementById('boutonAjouter');

popUp.className = "displayNone";

fetch(baseURL + "/livre?livre_id=" + IdLivre)
    .then((response) => {
        return response.json();
    }).then((json) => {
        livreInfos(json);
    });

function livreInfos(arrayLivre) {
    var imgLivre = document.createElement('img');
    imgLivre.className = "livre-pic";
    if (arrayLivre[0].Photo == "" || arrayLivre[0].Photo == null) {
        imgLivre.src = "../img/livre.png";
    } else {
        imgLivre.src = arrayLivre[0].Photo;
    }

    var divInfo = document.createElement('div');
    divInfo.className = "book-info";

    var titreLivre = document.createElement('h1');
    titreLivre.innerHTML = arrayLivre[0].Nom;

    var strong1 = document.createElement('strong');
    strong1.innerHTML = "Auteur:";

    // fetch l'auteur du livre ---------------------------------
    var p1 = document.createElement('button');
    p1.className = "boutonAuteur";
    p1.value = arrayLivre[0].Id_Auteur;
    fetch(baseURL + "/auteur?auteur_id=" + arrayLivre[0].Id_Auteur)
        .then((response) => {
            return response.json();
        }).then((json) => {
            p1.innerHTML = " " + json[0].Nom;
        });
    p1.addEventListener('click', function () {
        var valeur = p1.value;
        window.location.href = "auteur.html?Id=" + encodeURIComponent(valeur);
    });

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var strong2 = document.createElement('strong');
    strong2.innerHTML = "Genre:";

    // fetch la categorie du Livre -------------------------------
    var p2 = document.createElement('p');
    p2.style = "display: inline;";
    fetch(baseURL + "/categorie?categorie_id=" + arrayLivre[0].Id_Categorie)
        .then((response) => {
            return response.json();
        }).then((json) => {
            p2.innerHTML = " " + json[0].Nom;
        });

    var br3 = document.createElement('br');
    var br4 = document.createElement('br');

    var p3 = document.createElement('p');
    p3.innerHTML = arrayLivre[0].Prix + " €";
    p3.className = "price";

    var br5 = document.createElement('br');

    var strong3 = document.createElement('strong');
    strong3.innerHTML = "Description:";

    var p4 = document.createElement('p');
    p4.innerHTML = arrayLivre[0].Description;
    p4.style = "display: inline;";

    var divBouton = document.createElement('div');
    divBouton.className = "buttons";
    divBouton.style = "margin-top: 20px;"

    var bouton = document.createElement('button');
    bouton.innerHTML = "Ajouter à une collection";
    bouton.className = "add-Livre";
    bouton.id = "add-Livre";

    bouton.addEventListener('click', function () {
        popUp.className = "background-flou";
    });

    getAddLivreCollectionButton();

    divInfo.appendChild(titreLivre);
    divInfo.appendChild(strong1);
    divInfo.appendChild(p1);
    divInfo.appendChild(br1);
    divInfo.appendChild(br2);
    divInfo.appendChild(strong2);
    divInfo.appendChild(p2);
    divInfo.appendChild(br3);
    divInfo.appendChild(br4);
    divInfo.appendChild(p3);
    divInfo.appendChild(br5);
    divInfo.appendChild(strong3);
    divInfo.appendChild(p4);
    divBouton.appendChild(bouton);
    divInfo.appendChild(divBouton);
    divLivreInfos.appendChild(imgLivre);
    divLivreInfos.appendChild(divInfo);
}

fetch(baseURL + "/commentaire?livre_id=" + IdLivre)
    .then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
        createCommentaire(json);
    });

function createCommentaire(arrayCom) {
    arrayCom.forEach(element => {

        var divCom = document.createElement('div');
        divCom.className = "comment";

        var buProfil = document.createElement('button');
        buProfil.className = "boutonProfilCom";

        var imgProfil = document.createElement('img');
        imgProfil.className = "profil_pic_comment";
        fetch(baseURL + "/user?user_id=" + element.Id_User)
            .then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json);
                if (json[0].Photo == null || json[0].Photo == "") {
                    imgProfil.src = "../img/default-profil-picture.png";
                } else {
                    imgProfil.src = json[0].Photo;
                }
            });

        var textComment = document.createElement('p');
        textComment.innerHTML = element.Com;

        buProfil.appendChild(imgProfil)
        divCom.appendChild(buProfil);
        divCom.appendChild(textComment);
        divCommentaires.appendChild(divCom);
    });
}

// Pop up => Collections
buCroix.addEventListener('click', function () {
    popUp.className = "displayNone";
});

buAjouterCollection.addEventListener('click', function () {
    var collec = document.getElementsByClassName('collection-name');
    var checkbox = document.getElementsByClassName('checkbox');
    for (let i = 0; i < collec.length; i++) {
        console.log(collec[i].innerHTML + " : " + checkbox[i].checked);
    }
    popUp.className = "displayNone";
});

// Add Commentaire 
buAjouterCommentaire.addEventListener('click', function () {
    var text = document.getElementById('input-text').value;
    console.log(text);
});

// Pour recuperer le bouton qui va etre créer :) 
async function getAddLivreCollectionButton() {
    for (let i = 0; i < 10; i++) {
        try {
            var buAddLivre = document.getElementById('Add-Livre');

            // Verification de la connection de l'utilisateur
            if (isCookieSet("isConnected")) {
                var connect = getCookieValue("isConnected");
                if (connect == 0) {
                    buAddLivre.className = "displayNone";
                    divAjouterCommentaire.className = "displayNone";
                } else {
                    buAddLivre.className = "";
                    divAjouterCommentaire.className = "";
                }
            } else {
                buAddLivre.className = "displayNone";
                divAjouterCommentaire.className = "displayNone";
            }
        } catch { }

        await delay(100);
    }
}
