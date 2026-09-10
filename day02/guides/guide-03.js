/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';


for (let ligne = 1; ligne <= 3; ligne++){
let texte = ""
for (let collone  = 0; collone <= 3; collone++) { texte = texte + "*"
}
console.log(texte)
}