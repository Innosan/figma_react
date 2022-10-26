import React, { useEffect, useState } from "react";

import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";
import cityBackground from "../../assets/Rectangle 4.png";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";

import { motion } from "framer-motion";
import axios from "axios";

function Weather() {
	const [weather, setWeather] = useState([]);
	let APIKey = "ece19822df9d679525a51b5d1f8d566a";

	useEffect(() => {
		fetchWeather();
	}, []);

	const fetchWeather = () => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=30&lon=40&units=metric&appid=${APIKey}`
			)
			.then((res) => {
				setWeather(res.data);
			});
	};

	// useEffect(() => {
	// 	fetch(
	// 		`https://api.openweathermap.org/data/2.5/weather?lat=30&lon=40&units=metric&appid=${APIKey}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((result) => {
	// 			setWeather(result);
	// 		});
	// }, []);

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{
				opacity: 0,
				translateX: 0,
				transition: { duration: 1 },
			}}
		>
			<PageHeading pageHeading={"Weather"} pageIcon={logo} />
			<div className={styles.cards_container}>
				<WeatherTempCard props={weather}></WeatherTempCard>
				<WeatherCityCard back={cityBackground}></WeatherCityCard>
			</div>
		</motion.div>
	);
}

export default Weather;
