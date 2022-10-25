import React from "react";

import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";

import { motion } from "framer-motion";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";

import cityBackground from "../../assets/Rectangle 4.png";

function Weather() {
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
