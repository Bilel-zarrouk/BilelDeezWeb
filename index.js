/**
 * 1. Importez les modules "factoriel.js" et "fibonacci.js"
 * 2. Servez-vous des fonctions importées pour compléter les « ??? » 
 */

/** 
 * Import des modules "factoriel" et "fibonacci"
*/
const facto = require('./factoriel.js');
const fibo = require('./fibonacci.js');

const texte = require('./text.txt');
console.log(texte);

console.log(`\n=== FACTORIEL ==================\n`)

/*
    Factoriel de n (ou aussi noté « n! ») correspond à la multiplication de\ntous les nombres entiers de 1 jusqu'à n.
    Par exemple: 5! = 1 × 2 × 3 × 4 × 5 = 120
    https://fr.wikipedia.org/wiki/Factorielle
*/

console.log(`   3!  = ${facto(3)}`);
console.log(`   7!  = ${facto(7)}`);
console.log(`   10! = ${facto(10)}`);

// --

console.log(`\n=== FIBONACCI ==================\n`);

/*
    La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Elle commence par les termes 0 et 1
    https://fr.wikipedia.org/wiki/Suite_de_Fibonacci
*/

console.log(`   F9  = ${fibo(9)}`);
console.log(`   F12 = ${fibo(12)}`);
console.log(`   F15 = ${fibo(15)}`);
