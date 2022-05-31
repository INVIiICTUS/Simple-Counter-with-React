/* codigo para mostrar el valor de los segundos del reloj*/

import React, { useState, useEffect } from "react";

//inicializacion de variables
var decSeg = 0; //decen seconds
var uniMin = 0; //unites minutes
var decMin = 0; //decen minutes
var uniHour = 0; //unites horas
var DecHour = 0; //decen hours
let DuniHour = 0; //unites hours auxiliary var to watch in display
const Counter = (props) => {
	var uniSeg = props.valor; //assign to value index.js Valor=Seconds to unit seconds var
	if (props.resetea == 0) {
		if (uniSeg == 10) {
			uniSeg = 0;
			decSeg = decSeg + 1;
		}

		if (decSeg == 6) {
			decSeg = 0;
			uniMin = uniMin + 1;
		} else {
			decSeg = decSeg;
		}

		if (uniMin == 10) {
			uniMin = 0;
			decMin = decMin + 1;
		}

		if (decMin == 6) {
			decMin = 0;
			uniHour = uniHour + 1;
			DuniHour = DuniHour + 1;
		}
		//switch for give format Hour to each Numbers in Display
		switch (uniHour) {
			case 10:
				DuniHour = 0;
				DecHour = 1;
				break;
			case 11:
				DuniHour = 1;
				DecHour = 1;
				break;
			case 12:
				DuniHour = 0;
				DecHour = 0;
				uniHour = 0;
				break;
		}
	} else {
		decSeg = 0; //decen seconds
		uniMin = 0; //unites minutes
		decMin = 0; //decen minutes
		uniHour = 0; //unites horas
		DecHour = 0; //decen hours
		DuniHour = 0;
	}

	return (
		<div className="bigcounter">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="clockcounter">{DecHour}</div>
			<div className="clockcounter">{DuniHour}</div>
			<div className="clockcounter">{decMin}</div>
			<div className="clockcounter">{uniMin}</div>
			<div className="clockcounter">{decSeg}</div>
			<div className="clockcounter">{uniSeg}</div>
		</div>
	);
};

export default Counter;
