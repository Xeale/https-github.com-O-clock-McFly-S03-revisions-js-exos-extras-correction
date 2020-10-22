/* === Exo4 ===
 *
 * Copier/coller les fonctions des exercices 2 et 3 puis les combiner pour :
 * - demander à l'utilisateur le rayon d'un cercle
 * - calculer l'aire du cercle correspondante
 * - afficher le résultat en console, dans une pop-up et retourner la valeur (!)
 */

// Exo 2 (fonction remaniée pour cet exercice)
function afficher(message) {
  console.log('Résultat ' + name + ' !');
}

// Exo 3
function diskArea(radius) {
  if (isNaN(radius) || radius <= 0) {
    return false;
  }
  return roundToTwo(Math.PI * radius * radius);
}

function program() {
  var radius = Number(window.prompt('Quel rayon (en cm) ?'));
  if (isNaN(radius)) return;
  var area = diskArea(radius);
  console.log(area);
  window.alert('Aire du disque : ' + area + ' cm2');
}

program();