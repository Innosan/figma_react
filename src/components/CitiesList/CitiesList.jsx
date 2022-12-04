import React from "react";

import styles from "./CitiesList.module.scss";

import Button from "../Button/Button.jsx";

function CitiesList({ style, cities, fetch, close }) {
	return (
		<div className={styles.container} style={style}>
			{cities.map((city) => (
				<Button
					key={city.name}
					cityName={city.name}
					onClick={() => {
						fetch(city.lat, city.lon);
						close();
					}}
				></Button>
			))}
		</div>
	);
}

export default CitiesList;
