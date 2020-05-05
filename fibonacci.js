/**
 * Renvoie la valeur de la suite de Fibonacci à l'indice "n"
 * @param {Number} n Valeur de la suite de Fibonacci à atteindre
 */
function fibo(n) {
    /** Votre code ici */
    if (n <= 2) return 1;

    // console.log(`n = ${n}, calcul de : ${n-1} + ${n-2}`);
    return fibo(n-1) + fibo(n-2);
}

/** Exporter ici la fonction 'fibo' */
module.exports = fibo;

// fibo(1); // = 1
// fibo(2); // = 1