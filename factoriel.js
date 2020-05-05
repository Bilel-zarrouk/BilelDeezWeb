/**
 * Fonction calculant le factoriel de "n"
 * @param {Number} n Valeur du factoriel
 */
function facto(n) {
    /** Votre code ici */
    let total = 1;
    for (let i = n; i > 1; i--) {
        total = total * i;
    }
    return total;
}

/** Exporter ici la fonction 'facto' */
module.exports = facto;

//facto(6) // 6 * 5 * 4 * 3 * 2