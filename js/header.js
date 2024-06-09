// Obtenir tous les cookies
const cookies = document.cookie.split(';');

// Fonction pour vérifier si un cookie existe
function isCookieSet(cookieName) {
    // Rechercher le cookie par son nom
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Vérifier si le cookie commence par le nom recherché
        if (cookie.startsWith(cookieName + '=')) {
            return true; // Le cookie est trouvé
        }
    }
    return false; // Le cookie n'est pas trouvé
}

// Exemple d'utilisation
if (isCookieSet('myCookie')) {
    console.log('Le cookie "myCookie" est défini.');
} else {
    console.log('Le cookie "myCookie" n\'est pas défini.');
}

function getCookieValue(cookieName) {
        
    // Parcourir chaque cookie
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        // Vérifier si le cookie commence par le nom recherché suivi de "="
        if (cookie.startsWith(cookieName + '=')) {
            // Retourner la valeur du cookie en supprimant le "cookieName="
            return cookie.substring(cookieName.length + 1);
        }
    }
    
    // Si le cookie n'est pas trouvé, retourner null ou une chaîne vide
    return null;
}