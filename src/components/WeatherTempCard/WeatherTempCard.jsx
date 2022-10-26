import React from "react";

import styles from "./WeatherTempCard.module.scss";

function WeatherTempCard({ props }) {
	return (
		<div className={styles.card_container}>
			<h2>
				<img src="" alt="" />
				{Math.floor(props.main.temp)}°C
			</h2>
			{/*<p>*/}
			{/*	<img src="" alt="" />*/}
			{/*	Feels like: {Math.floor(props.props.main.feels_like)}°C*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	<img src="" alt="" />*/}
			{/*	Humidity: {props.props.main.humidity}%*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	<img src="" alt="" />*/}
			{/*	Wind: {props.props.wind.speed} m/s*/}
			{/*</p>*/}
		</div>
	);
}

export default WeatherTempCard;
