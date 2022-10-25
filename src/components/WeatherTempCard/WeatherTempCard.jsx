import React from "react";

import styles from "./WeatherTempCard.module.scss";

function WeatherTempCard(props) {
	return (
		<div className={styles.card_container}>
			<h2>
				<img src="" alt="" />
				{/*{props.temperature}°C*/}
			</h2>
			<p>
				<img src="" alt="" />
				{/*Feels like: {props.feelsLike}*/}
			</p>
			<p>
				<img src="" alt="" />
				{/*Humidity: {props.humidity}*/}
			</p>
			<p>
				<img src="" alt="" />
				{/*Wind: {props.windSpeed}*/}
			</p>
		</div>
	);
}

export default WeatherTempCard;
