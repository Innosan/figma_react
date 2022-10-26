import React, {useEffect, useState} from "react";
import usePosition from "../../hooks/usePosition.jsx";

import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";
import cityBackground from "../../assets/Rectangle 4.png";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";

import { motion } from "framer-motion";
import UsePosition from "../../hooks/usePosition.jsx";


function Weather() {
	const { latitude, longitude } = usePosition({});
	console.log(latitude)
	const [tempData, setTempData] = useState([]);
	const APIKey = "ece19822df9d679525a51b5d1f8d566a";

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`)
			.then((response) => response.json())
			.then((weatherData) => {
				setTempData(weatherData);
				console.log(weatherData)
			})
	}, [UsePosition()])

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Weather"} pageIcon={logo} />
			<div className={styles.cards_container}>
				<WeatherTempCard></WeatherTempCard>
				<WeatherCityCard back={cityBackground}></WeatherCityCard>
			</div>
		</motion.div>
	);
}

export default Weather;
