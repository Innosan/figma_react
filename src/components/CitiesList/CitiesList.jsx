import React from "react";

import styles from "./CitiesList.module.scss";

import Button from "../Button/Button.jsx";

function CitiesList(props) {
	return (
		<div className={styles.container} style={props.style}>
			{props.cities.map((city) => (
				<Button
					key={city.name}
					cityName={city.name}
					onClick={() => {
						props.fetch(city.lat, city.lon);
						props.close();
					}}
				></Button>
			))}
		</div>
	);
}

export default CitiesList;
