import React from "react"

export default function Page() {

    // Objectifs :
    // 1 - Créer un component Title prenant une props "username" et une props "style".
    // 2 - Ce component affichera "Bonjour [USERNAME]," et appliquera le style reçu à la balise <h1>.
    // 3 - Appeler ce composant dans le JSX ci-dessous
    // 4 - Créer un component SubTitle qui PEUT prendre une props "shipName". Si cette props est présente on affichera "Bienvenue à bord du [SHIPNAME]', sinon, juste "Bienvenue"

    return (
        <div>
            <h1>
                Bonjour Jean-Kévin,
            </h1>
            <h2>Bienvenue à bord du Commandant Charcot.</h2>
            <p>
                Ceci est un texte de présentation de l'expérience Ponant. Nous pourrons en écrire plein de similaires
                pour le fun !
            </p>
        </div>
    )
}