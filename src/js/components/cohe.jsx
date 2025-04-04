import React, { useState } from "react";


export const Coche = () => {

    const [selected, setSelected] = useState('')

    const [varName, setVarName] = useState()

    /*

    selected --> se usa para llamar el valor de la variable y permite cualquier accion sobre ella EXCEPTO modificacion:
    ej: comparacion, mostrar valor
    setSelected ---> SOLO sirve para modificar a selected

    */


    const handleClick = (val) => {
        setSelected(val)
    }


    const icon = () => {
        console.log('asdasdasd')
        if (selected == 'sin luces') {
            return <i className="fa-solid fa-circle-half-stroke"></i>
        }
        if (selected == 'luces cortas') {
            return <i className="fa-solid fa-lightbulb"></i>
        }
        if (selected == 'luces largas') {
            return <i className="fa-solid fa-sun"></i>
        }

    }
    return (
        <div>
            <h2>El choce tiene seleccionado: {selected}<span>{icon()}</span></h2>
            <ul>
                <li className={`${selected==='sin luces' && 'bg-success'}`} onClick={() => handleClick('sin luces')}>sin luces</li>
                <li className={`${selected==='luces cortas' && 'bg-warning'}`} onClick={() => handleClick('luces cortas')}>luces cortas</li>
                <li onClick={() => handleClick('luces largas')}>luces largas</li>
            </ul>
        </div>
    )
}