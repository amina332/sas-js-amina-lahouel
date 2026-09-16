/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [{
    nom : "wiam" , score :13,
},

{
    nom : "khalid" , score : 100 ,
},

{
    nom : "zineb" , score : 11

}

]
function lemeilleur ( candidats){
    let indexMax = candidats[0].score
    let maxname = candidats[0].nom
    for (let i = 1; i < candidats.length; i++) {
        if (candidats[i].score >indexMax){
            indexMax = candidats[i].score
            maxname = candidats[i].nom
        }
    }
        return maxname

}
console.log(lemeilleur(candidats));