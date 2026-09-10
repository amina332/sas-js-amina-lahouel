/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SAPIN CENTRÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Allez plus loin, dessinez une pyramide centrée de 5 lignes :
 *
 *     *
 *    *
 *   *
 *  *
 * -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day02/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


for(let ligne = 1; ligne <= 5; ligne++) {
    let espaces = "";
    let etoiles = "";

    for (let i = 1; i <= 5 - ligne; i++) {
        espaces = espaces + " ";
    }

    for (let i = 1; i <= 2 * ligne - 1; i++) {
        etoiles = etoiles + "*";
    }

    console.log(espaces + etoiles);

}
