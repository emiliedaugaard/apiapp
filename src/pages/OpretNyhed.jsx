import React, { useContext, useState} from 'react'
import { NyhedContext } from "../context/NyhedContext"

const OpretNyhed = () => {

    const {addNyhed} = useContext(NyhedContext)

    // State til indhold i form til den  nye nyhed
    const [title, setOverskrift] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addNyhed(title, body)
    }

    return (
        <div>
            <h1>OpretNyhed</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Overskriften" value={title} onChange={(e) => setOverskrift(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Nyheds tekst" value={body} onChange={(e) => setBody(e.target.value)}/>
                <br/>
                <input type="submit" value="Gem nyheden"/>
            </form>
        </div>
    )
}

export default OpretNyhed
