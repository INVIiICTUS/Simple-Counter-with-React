import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "Seco"

//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="text-center mt-5">Contador React</h1>
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			
		</div>
	);
};

export default Home;
