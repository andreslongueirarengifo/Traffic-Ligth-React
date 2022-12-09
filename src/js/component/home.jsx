import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {

	const [colorRed, setSelectRed]= useState("")
	const [colorGreen, setSelectGreen]= useState("")
	const [colorYellow, setSelectYellow]= useState("")

	const changeColor=(ev)=>{
		const aux = ev.target.id
		console.log(aux)
		if(aux === "red"){
			setSelectRed("selected")
			setSelectGreen("")
			setSelectYellow("")
		}else if (aux === "yellow"){
			setSelectYellow("selected")
			setSelectGreen("")
			setSelectRed("")
		}else if( aux === "green"){
			setSelectGreen("selected")
			setSelectYellow("")
			setSelectRed("")
		}
	}


	return (
		<div>
		<div className="trafficTop"></div>
			<div className="container">
				<div onClick={changeColor} id="red" className={`red light ${colorRed}`}></div>
				<div onClick={changeColor} id="yellow" className={`yellow light ${colorYellow}`}></div>
				<div onClick={changeColor} id="green" className={`green light ${colorGreen}`}></div>
			</div>
		</div>

	);
};

export default Home;
