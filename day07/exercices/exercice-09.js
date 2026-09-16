/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [{
    nom : "wiam" , score :9,
},

{
    nom : "khalid" , score : 12 ,
},

{
    nom : "zineb" , score : 5

}

]
function admit (candidats) {
    let resultat = []
    for (let i = 0; i < candidats.length; i++) {
       if (candidats[i].score >= 10 ){
        resultat.push = candidats[i]
       }
        
    }
    return resultat
}
console.log(admit (candidats));
