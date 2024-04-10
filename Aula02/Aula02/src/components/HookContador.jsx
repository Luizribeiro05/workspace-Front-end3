import React from 'react'
import { useState } from 'react'

const HookContador = () => {
    const [count, setCount] = useState(0)
    
    function incrementarContador(){
        setContador (contador + 1)
     }
    return(
        <div>
            <h1>Contador com useState</h1>
            <button onClick={incrementarContador}>
                Incrementar Contador
            </button>
            <h2>O contador esta em :{count}</h2>
        </div>
    )
}

export default HookContador