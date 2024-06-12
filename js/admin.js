// URL API
var baseURL = "http://localhost:8080";

// Ajout de livre -----------------------------------------------------------------
// Inputs
var inputNomLivre = document.getElementById('inputNomLivre');
var inputDescriptionLivre = document.getElementById('inputDescriptionLivre');
var inputPhotoLivre = document.getElementById('inputPhotoLivre');
var inputIsbnLivre = document.getElementById('inputIsbnLivre');
var inputEditeurLivre = document.getElementById('inputEditeurLivre');
var inputPrixLivre = document.getElementById('inputPrixLivre');
var inputAuteurIdLivre = document.getElementById('inputAuteurIdLivre');
var inputCategorieIdLivre = document.getElementById('inputCategorieIdLivre');
// Warnings
var warningNomLivre = document.getElementById('warningNomLivre');
var warningDescriptionLivre = document.getElementById('warningDescriptionLivre');
var warningPhotoLivre = document.getElementById('warningPhotoLivre');
var warningIsbnLivre = document.getElementById('warningIsbnLivre');
var warningEditeurLivre = document.getElementById('warningEditeurLivre');
var warningPrixLivre = document.getElementById('warningPrixLivre');
var warningAuteurIdLivre = document.getElementById('warningAuteurIdLivre');
var warningCategorieIdLivre = document.getElementById('warningCategorieIdLivre');
// Button
var buAjouterLivre = document.getElementById('buAjouterLivre');

buAjouterLivre.addEventListener('click', function () {
    var nothingEmpty = true;

    if (inputNomLivre.value == "") {
        warningNomLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningNomLivre.className = "displayNone";
    }
    if (inputDescriptionLivre.value == "") {
        warningDescriptionLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningDescriptionLivre.className = "displayNone";
    }
    if (inputPhotoLivre.value == "") {
        warningPhotoLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningPhotoLivre.className = "displayNone";
    }
    if (inputIsbnLivre.value == "") {
        warningIsbnLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningIsbnLivre.className = "displayNone";
    }
    if (inputEditeurLivre.value == "") {
        warningEditeurLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningEditeurLivre.className = "displayNone";
    }
    if (inputPrixLivre.value == "") {
        warningPrixLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningPrixLivre.className = "displayNone";
    }
    if (inputAuteurIdLivre.value == "") {
        warningAuteurIdLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningAuteurIdLivre.className = "displayNone";
    }
    if (inputCategorieIdLivre.value == "") {
        warningCategorieIdLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningCategorieIdLivre.className = "displayNone";
    }

    // Call API pour ajouter le livre 
    if (nothingEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomLivre.value = "";
        inputDescriptionLivre.value = "";
        inputPhotoLivre.value = "";
        inputIsbnLivre.value = "";
        inputEditeurLivre.value = "";
        inputPrixLivre.value = "";
        inputAuteurIdLivre.value = "";
        inputCategorieIdLivre.value = "";

        // Execution de la requête
        console.log("Faire fetch ajout livre");
    }
});


// Changer les informations d'un livre --------------------------------------------
// Inputs
var inputNomLivreModif = document.getElementById('inputNomLivreModif');
var inputDescriptionLivreModif = document.getElementById('inputDescriptionLivreModif');
var inputPhotoLivreModif = document.getElementById('inputPhotoLivreModif');
var inputIsbnLivreModif = document.getElementById('inputIsbnLivreModif');
var inputEditeurLivreModif = document.getElementById('inputEditeurLivreModif');
var inputPrixLivreModif = document.getElementById('inputPrixLivreModif');
var inputAuteurIdLivreModif = document.getElementById('inputAuteurIdLivreModif');
var inputCategorieIdLivreModif = document.getElementById('inputCategorieIdLivreModif');
// Warning
var warningChangerInfoLivre = document.getElementById('warningChangerInfoLivre');
// Button
var buModifierLivre = document.getElementById('buModifierLivre');

buModifierLivre.addEventListener('click', function () {
    var everythingEmpty = false;

    if (inputNomLivreModif.value == "" && inputDescriptionLivreModif.value == "" && inputPhotoLivreModif.value == "" && inputIsbnLivreModif.value == "" && inputEditeurLivreModif.value == "" && inputPrixLivreModif.value == "" && inputAuteurIdLivreModif.value == "" && inputCategorieIdLivreModif.value == "") {
        warningChangerInfoLivre.className = "warning";
        everythingEmpty = true;
    } else {
        warningChangerInfoLivre.className = "displayNone";
    }

    if (!everythingEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomLivreModif.value = "";
        inputDescriptionLivreModif.value = "";
        inputPhotoLivreModif.value = "";
        inputIsbnLivreModif.value = "";
        inputEditeurLivreModif.value = "";
        inputPrixLivreModif.value = "";
        inputAuteurIdLivreModif.value = "";
        inputCategorieIdLivreModif.value = "";

        // Execution de la requête
        console.log("Faire fetch modification infos livre");
    }
});

// Suppression d'un livre ---------------------------------------------------------
// Input
var inputSupprimerLivre = document.getElementById('inputSupprimerLivre');
// Warning
var warningSupprimerLivre = document.getElementById('warningSupprimerLivre');
// Button
var buSupprimerLivre = document.getElementById('buSupprimerLivre');

buSupprimerLivre.addEventListener('click', function () {
    var isEmpty = false;

    if (inputSupprimerLivre.value == "") {
        warningSupprimerLivre.className = "warning";
        isEmpty = true;
    } else {
        warningSupprimerLivre.className = "displayNone";
    }

    if (!isEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputSupprimerLivre.value = "";

        // Execution de la requête
        console.log("Faire fetch suppression livre");
    }
});

// Ajout d'un auteur --------------------------------------------------------------
// Inputs
var inputNomAuteur = document.getElementById('inputNomAuteur');
var inputDescriptionAuteur = document.getElementById('inputDescriptionAuteur');
var inputPhotoAuteur = document.getElementById('inputPhotoAuteur');
// Warnings
var warningNomAuteur = document.getElementById('warningNomAuteur');
var warningDescriptionAuteur = document.getElementById('warningDescriptionAuteur');
var warningPhotoAuteur = document.getElementById('warningPhotoAuteur');
// Button
var buAjoutAuteur = document.getElementById('buAjoutAuteur');

buAjoutAuteur.addEventListener('click', function () {
    var nothingEmpty = true;

    if (inputNomAuteur.value == "") {
        warningNomAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningNomAuteur.className = "displayNone";
    }
    if (inputDescriptionAuteur.value == "") {
        warningDescriptionAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningDescriptionAuteur.className = "displayNone";
    }
    if (inputPhotoAuteur.value == "") {
        warningPhotoAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningPhotoAuteur.className = "displayNone";
    }

    if (nothingEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomAuteur.value = "";
        inputDescriptionAuteur.value = "";
        inputPhotoAuteur.value = "";

        // Execution de la requête
        console.log("Faire fetch ajout auteur");
    }
});

// Changer les informations d'un auteur -------------------------------------------
// Inputs
var inputNomAuteurModif = document.getElementById('inputNomAuteurModif');
var inputDescriptionAuteurModif = document.getElementById('inputDescriptionAuteurModif');
var inputPhotoAuteurModif = document.getElementById('inputPhotoAuteurModif');
// Warning
var warningChangerInfoAuteur = document.getElementById('warningChangerInfoAuteur');
// Button
var buModiferAuteur = document.getElementById('buModiferAuteur');

buModiferAuteur.addEventListener('click', function () {
    var everythingEmpty = false;

    if (inputNomAuteurModif.value == "" && inputDescriptionAuteurModif.value == "" && inputPhotoAuteurModif.value == "") {
        warningChangerInfoAuteur.className = "warning";
        everythingEmpty = true;
    } else {
        warningChangerInfoAuteur.className = "displayNone";
    }

    if (!everythingEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomAuteurModif.value = "";
        inputDescriptionAuteurModif.value = "";
        inputPhotoAuteurModif.value = "";

        // Execution de la requête
        console.log("Faire fetch modification infos auteur");
    }
});

// Ajout d'une catégorie ----------------------------------------------------------
// Input
var inputNomCategorie = document.getElementById('inputNomCategorie');
// Warning
var warningNomCategorie = document.getElementById('warningNomCategorie');
// Button
var buAjoutCategorie = document.getElementById('buAjoutCategorie');

buAjoutCategorie.addEventListener('click', function () {
    var isEmpty = false;

    if (inputNomCategorie.value == "") {
        warningNomCategorie.className = "warning";
        isEmpty = true;
    } else {
        warningNomCategorie.className = "displayNone";
    }

    if (!isEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomCategorie.value = "";

        // Execution de la requête
        console.log("Faire fetch ajout d'une catégorie");
    }
});

// Suppression d'un commentaire ---------------------------------------------------
// Input
var inputIdCommentaire = document.getElementById('inputIdCommentaire');
// Warning
var warningIdCommentaire = document.getElementById('warningIdCommentaire');
// Button
var buSupprimerCommentaire = document.getElementById('buSupprimerCommentaire');

buSupprimerCommentaire.addEventListener('click', function () {
    var isEmpty = false;

    if (inputIdCommentaire.value == "") {
        warningIdCommentaire.className = "warning";
        isEmpty = true;
    } else {
        warningIdCommentaire.className = "displayNone";
    }

    if (!isEmpty) {
        // Reset des champs pour éviter de faire la manip deux fois :)
        inputIdCommentaire.value = "";

        // Execution de la requête
        console.log("Faire fetch suppression d'un commentaire");
    }
});
