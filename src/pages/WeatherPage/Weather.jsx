import React, { useEffect, useState } from "react";

import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";
import cityBackground from "../../assets/Rectangle 4.png";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";

import { motion } from "framer-motion";
import axios from "axios";
import usePosition from "../../hooks/usePosition.js";

function Weather() {
	const [weather, setWeather] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const { latitude, longitude } = usePosition({});

	let APIKey = "ece19822df9d679525a51b5d1f8d566a";
	let url = '';
	if (latitude) {url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`;}

	const fetchWeather = () => {
		if(url) {
			axios.get(url).then((res) => {
				setWeather(res.data);
				setIsLoaded(true);
			});
		}
	};

	useEffect(() => {
		fetchWeather();
		if(latitude){
			console.log("latitude -> ", latitude)
		}
	}, [latitude]);

	return isLoaded ? (
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
				<WeatherCityCard
					back={cityBackground}
					props={weather}
				></WeatherCityCard>
			</div>
		</motion.div>
	) : (
		<div></div>
	);
}

export default Weather;
