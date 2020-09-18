import React, { useContext } from 'react'
import { ProduktContext } from "../context/ProduktContext"

const Produkt = (props) => {

    const { findProdukt } = useContext(ProduktContext)

    let produktID = +props.match.params.produktid
    const p = findProdukt(produktID)
    // console.log(p)
    return (
        <div>
            <article key={p.produktid}>
                <h2>{p.produkttitel}</h2>
                <p>{p.produktinfo}</p>
                <p>{p.produktpris}</p>
                <p>{p.produktbeskrivelse}</p>
            </article>
        </div>
    )
}

export default Produkt
