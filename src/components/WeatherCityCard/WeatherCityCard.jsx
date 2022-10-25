import React from "react";

import styles from "./WeatherCityCard.module.scss";

function WeatherCityCard(props) {
	return (
		<div
			className={styles.card_container}
			style={{ backgroundImage: `url(\"${props.back}\"` }}
		>
			<img alt="" />
			<div className={styles.city_info_container}>
				<p>St. Petersburg, RU</p>
				<p>Moderate rain, maximum pain</p>
			</div>
		</div>
	);
}

export default WeatherCityCard;
