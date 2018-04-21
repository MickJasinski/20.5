import React from "react";
import "./css/main.css";

const CountryFlag = props => (
	<div className="country-logo-wrapper">
		<h1>{props.country.name}</h1>
		<img
			className="country-logo"
			src={props.country.imageUrl}
			alt="country flag"
		/>
	</div>
);

export default CountryFlag;
