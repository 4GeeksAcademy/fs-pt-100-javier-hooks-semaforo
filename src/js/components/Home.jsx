import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Prueba } from "./prueba.jsx";
import { Comp } from "./comp.jsx";
import { Coche } from "./cohe.jsx";

//create your first component
const Home = () => {

	//mayoria de variables en react seran estados
	//variable vs estado
	//estado va a generar un renderizado del componente donde se encuentra
	//estado no se puede modificar directamente
	//siempre siguen la misma estructura


	//si mi estado lo va a consumir los hijos, va en el padre
	//si el estado es propio del archivo, va en el archivo correspondiente



	//declaracion de estado
	const [age, setAge] = useState(14)


	const [counter, setCounter] = useState(0)

	console.log('componente home');

	let num = 0 // se dejan para variables dentro de funciones


	const sum = (a, b) => {
		let total = a + b
		return total
	}



	const handleClick = () => {
		num++
		console.log(num);
	}
	const handleState = () => {
		//counter++ // no se puede modificar el valor de un estado de manera directa
		setCounter(prev => prev + 1)
	}


	return (
		<>

			<div className="text-center">

				<Comp color={'success'} />

				<h1>hooks for everyone!</h1>

				<p className="fs-1">{age}</p>

				<div>
					<h2>Cantidad de clicks</h2>
					<p className="fs-1"
					>
						{counter}
					</p>
					<p className="fs-1"> num:
						{num}
					</p>
					<button className="btn btn-primary" onClick={() => handleClick()}>cuantos clicks puedes hacer?</button>
					<button className="btn btn-primary" onClick={handleState}>cuantos clicks puedes hacer version estado?</button>

				</div>

			</div>
			<Prueba />

			<Coche/>
		</>
	);
};

export default Home;