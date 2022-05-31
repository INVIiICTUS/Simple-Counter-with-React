//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";
var second = 0;
var reset = 0;
function renderClock() {
	ReactDOM.render(
		<div>
			<Counter valor={second} resetea={reset} />
			<button
				onClick={() => {
					second = 0;
					reset = 1;
				}}>
				RESET
			</button>
		</div>,
		document.querySelector("#app")
	);
	second = second + 1;
	//codition for restart second value
	if (second > 10) {
		second = 1;
	}
}
setInterval(renderClock, 1000);
