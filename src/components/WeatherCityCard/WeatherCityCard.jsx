import React from "react";

import styles from "./WeatherCityCard.module.scss";

function WeatherCityCard(props) {
	return (
		<div
			className={styles.card_container}
			style={{
				backgroundImage: `url(${props.background.results[3].urls.regular})`,
			}}
		>
			<img alt="" />
			<div className={styles.city_info_container}>
				<p className={styles.city_name}>
					{props.cityData.results[0].components.city},{" "}
					{props.weatherData.sys.country}
				</p>
				<p className={styles.weather_desc}>
					{props.weatherData.weather[0].description.toLocaleUpperCase()}
				</p>
			</div>
		</div>
	);
}

export default WeatherCityCard;
