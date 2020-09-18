import React, { useContext } from 'react'
import { NyhedContext } from "../context/NyhedContext"

const Nyhed = (props) => {

    const {findNyhed} = useContext(NyhedContext)

    // + laver det til et tal/number
    let nyhedsID = +props.match.params.nyhedsid
    const n = findNyhed(nyhedsID)

    return (
        <div>
            <article key={n.id}>
                <h2>{n.title}</h2>
                <p>{n.body}</p>
            </article>
        </div>
    )
}

export default Nyhed
