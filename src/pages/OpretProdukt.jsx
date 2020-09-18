import React, { useContext, useState } from 'react'
import { ProduktContext } from "../context/ProduktContext"

const OpretProdukt = () => {

    const {addProdukter} = useContext(ProduktContext)

    const [produkttitel, setOverskrift] = useState("")
    const [produktinfo, setInfo] = useState("")
    const [produktpris, setPris] = useState("")
    const [produktbeskrivelse, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefalut()
        addProdukter(produkttitel, produktinfo, produktpris, produktbeskrivelse)
    }
    
    return (
        <div>
            <h1>Opret produkt</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Produktet" value={produkttitel} onChange={(e) => setOverskrift(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Produktinfo" value={produktinfo} onChange={(e) => setInfo(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Produktpris" value={produktpris} onChange={(e) => setPris(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Information om produktet" value={produktbeskrivelse} onChange={(e) => setBody(e.target.value)}/>
                <br/>
                <input type="submit" value="Gem produkt"/>
            </form>
        </div>
    )
}

export default OpretProdukt
