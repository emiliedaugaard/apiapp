import React, {useContext} from 'react'
import { ProduktContext } from "../context/ProduktContext"
import { NavLink } from "react-router-dom"

const Produkter = () => {

    const { produkter, sletProdukt } = useContext(ProduktContext)
    console.log(produkter)

    const alleProdukter = produkter.length ? (
        produkter.map(p => {
            return(
                <article key={p.produktid}>
                    <h2>{p.produkttitel}</h2>
                    <p>{p.produktinfo}</p>
                    <p>{p.produktpris}</p>
                    <p>{p.produktbeskrivelse.substring(0,30)} ...<NavLink to={"/produkt/" + p.produktid}>Læs mere om produktet</NavLink></p>
                    <button onClick={() => sletProdukt(p.produktid)}>Slet produkt</button>
                </article>
            )
        })
    ) : (
        <article>
            <h3>Der er ikke nogle produkter</h3>
        </article>
    )
    
    return (
        <div>
            <h1>Produkter</h1>
            {alleProdukter}
        </div>
    )
}

export default Produkter
