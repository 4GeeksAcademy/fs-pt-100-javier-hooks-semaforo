import React, { useState } from "react";

export const Prueba = () =>{

console.log('************************componente prueba**********************');

    const [name, setName] = useState('');

    return (
        <div>
            <h2>
            componente prueba, valor de name: {name}
            </h2>
            <button onClick={()=>setName('pepe')}>cambiar nombre a pepe</button>
        </div>
    )
}