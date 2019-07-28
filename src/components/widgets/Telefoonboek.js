import React from 'react'

export default function Telefoonboek() {
    return (
        <div className="widget telefoonboek no-border">
            <h2>Telefoonboek</h2>
            <p>Vind collega’s op naam, trefwoord, functie, etc.</p>
            <form className="telefonForm">
                <div> 
                    <input type="text" />
                    <button type="button"><img src="/images/zoeken.svg" alt=""/></button>
                </div>
            </form>
        </div>
    )
}
