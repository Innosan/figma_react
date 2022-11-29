import React, { useEffect, useState } from "react";

import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";

import { motion } from "framer-motion";
import axios from "axios";
import usePosition from "../../hooks/usePosition.js";

function Weather() {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState([]);
	const [cityBackground, setCityBackground] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);
	const [isCityLoaded, setIsCityLoaded] = useState(false);
	const { latitude, longitude } = usePosition({});

	let WeatherAPIKey = "ece19822df9d679525a51b5d1f8d566a";
	let CityAPIKey = "25b4c94d8c42415e9df76a57cab8b781";
	let UnsplashAPIKey = "gcK-21RopHVCGDUNDowX9e41Uy32hvBwV_YjnUPczAw";

	let weatherURL = "";
	let cityURL = "";
	let unsplashURL = "";

	if (latitude) {
		weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherAPIKey}`;
		cityURL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=en&key=${CityAPIKey}`;
	}

	if (isCityLoaded) {
		unsplashURL = `https://api.unsplash.com/search/photos/?query=${city.results[0].components.city}&client_id=${UnsplashAPIKey}`;

		axios.get(unsplashURL).then((res) => {
			setCityBackground(res.data);
			setIsLoaded(true);
		});
	}

	const fetchWeather = () => {
		if (weatherURL) {
			axios.get(weatherURL).then((res) => {
				setWeather(res.data);
			});

			axios.get(cityURL).then((res) => {
				setCity(res.data);
				setIsCityLoaded(true);
			});
		}
	};

	useEffect(() => {
		fetchWeather();
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
					background={cityBackground}
					weatherData={weather}
					cityData={city}
				></WeatherCityCard>
			</div>
		</motion.div>
	) : (
		<div>Loading...</div>
	);
}

export default Weather;
