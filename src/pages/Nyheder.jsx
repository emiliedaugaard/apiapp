import React, { useContext } from 'react'
import { NyhedContext } from "../context/NyhedContext"
import { NavLink } from "react-router-dom"

const Nyheder = () => {

    const { nyheder, sletNyhed } = useContext(NyhedContext)
    // console.log(nyheder.length)

    const alleNyheder = nyheder.length ? (
        nyheder.map(n => {
            return(
                <article key={n.id}>
                    <h2>{n.title}</h2>
                    <p>{n.body.substring(0,25)} ...<NavLink to={"/nyhed/" + n.id}>Læs mere</NavLink></p>
                    <button onClick={() => sletNyhed(n.id)}>Slet</button>  
                </article>

            )
        })
    ) : (
        <article>
        <h3>Der er ikke nogle nyheder</h3>
        </article>
    )
    return (
        <div>
            <h1>Nyheder</h1>
            {alleNyheder}
        </div>
    )
}

export default Nyheder
