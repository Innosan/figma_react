import React, { useState } from "react";

/**
 * libs
 */
import { motion } from "framer-motion";

/**
 * assets
 */
import logo from "../../assets/icons/PagesLogos/weatherLogo.svg";
import styles from "./Weather.module.scss";

/**
 * components
 */
import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import WeatherTempCard from "../../components/WeatherTempCard/WeatherTempCard.jsx";
import WeatherCityCard from "../../components/WeatherCityCard/WeatherCityCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Search from "../../components/Search/Search.jsx";
import CitiesList from "../../components/CitiesList/CitiesList.jsx";

/**
 * hooks
 */
import useAxiosWeather from "../../hooks/useAxiosWeather.js";
import GeolocationError from "../../components/GeolocationError/GeolocationError.jsx";

function Weather() {
	const [search, setSearch] = useState("");
	const [show, setShow] = useState(false);

	/**
	 *	setting up app data, getting weather data, city name for unsplash API
	 *	and city background
	 */
	const {
		weather,
		cityBackground,
		city,
		isLoaded,
		fetchWeatherByCity,
		positionError,
	} = useAxiosWeather();

	const popularCities = [
		{
			name: "Moscow",
			lat: 55.755826,
			lon: 37.6173,
		},
		{
			name: "Tokyo",
			lat: 35.689487,
			lon: 139.691706,
		},
		{
			name: "London",
			lat: 51.507351,
			lon: -0.127758,
		},
		{
			name: "Berlin",
			lat: 52.520007,
			lon: 13.404954,
		},
		{
			name: "Mumbai",
			lat: 19.075984,
			lon: 72.877656,
		},
	];

	/**
	 * 	I should change to API, tho logic is the same
	 */
	const allCities = [
		{
			name: "Novosibirsk",
			lat: 55.0333,
			lon: 82.9167,
		},
		{
			name: "Yekaterinburg",
			lat: 56.8356,
			lon: 60.6128,
		},
		{
			name: "Kazan",
			lat: 55.7908,
			lon: 49.1144,
		},
		{
			name: "Omsk",
			lat: 54.9667,
			lon: 73.3833,
		},
		{
			name: "Krasnoyarsk",
			lat: 56.0167,
			lon: 92.8667,
		},
		{
			name: "Krasnodar",
			lat: 45.0333,
			lon: 38.9833,
		},
	];

	/**
	 * function to show city search bar
	 * and found cities list
	 */
	function showSearchBar() {
		setShow(!show);
	}

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
			<button className={styles.pick_city_btn} onClick={showSearchBar}>
				Pick City
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.18333 27.15C6.02483 26.9983 5.83792 26.8793 5.63333 26.8C5.22757 26.6333 4.77244 26.6333 4.36667 26.8C4.16208 26.8793 3.97517 26.9983 3.81667 27.15C3.66493 27.3085 3.54599 27.4954 3.46667 27.7C3.33904 28.0035 3.30416 28.338 3.36645 28.6614C3.42874 28.9847 3.5854 29.2823 3.81667 29.5167C3.97867 29.6639 4.16469 29.7823 4.36667 29.8667C4.56617 29.9548 4.78188 30.0004 5 30.0004C5.21812 30.0004 5.43383 29.9548 5.63333 29.8667C5.83531 29.7823 6.02133 29.6639 6.18333 29.5167C6.4146 29.2823 6.57126 28.9847 6.63355 28.6614C6.69584 28.338 6.66097 28.0035 6.53333 27.7C6.45401 27.4954 6.33507 27.3085 6.18333 27.15ZM11.6667 13.3333H35C35.442 13.3333 35.866 13.1577 36.1785 12.8452C36.4911 12.5326 36.6667 12.1087 36.6667 11.6667C36.6667 11.2246 36.4911 10.8007 36.1785 10.4882C35.866 10.1756 35.442 10 35 10H11.6667C11.2246 10 10.8007 10.1756 10.4882 10.4882C10.1756 10.8007 10 11.2246 10 11.6667C10 12.1087 10.1756 12.5326 10.4882 12.8452C10.8007 13.1577 11.2246 13.3333 11.6667 13.3333ZM6.18333 18.8167C5.94896 18.5854 5.65134 18.4287 5.32802 18.3665C5.00471 18.3042 4.67019 18.339 4.36667 18.4667C4.16469 18.5511 3.97867 18.6694 3.81667 18.8167C3.66493 18.9752 3.54599 19.1621 3.46667 19.3667C3.37849 19.5662 3.33295 19.7819 3.33295 20C3.33295 20.2181 3.37849 20.4338 3.46667 20.6333C3.55107 20.8353 3.66945 21.0213 3.81667 21.1833C3.97867 21.3306 4.16469 21.4489 4.36667 21.5333C4.56617 21.6215 4.78188 21.6671 5 21.6671C5.21812 21.6671 5.43383 21.6215 5.63333 21.5333C5.83531 21.4489 6.02133 21.3306 6.18333 21.1833C6.33055 21.0213 6.44893 20.8353 6.53333 20.6333C6.62151 20.4338 6.66706 20.2181 6.66706 20C6.66706 19.7819 6.62151 19.5662 6.53333 19.3667C6.45401 19.1621 6.33507 18.9752 6.18333 18.8167ZM35 18.3333H11.6667C11.2246 18.3333 10.8007 18.5089 10.4882 18.8215C10.1756 19.134 10 19.558 10 20C10 20.442 10.1756 20.8659 10.4882 21.1785C10.8007 21.4911 11.2246 21.6667 11.6667 21.6667H35C35.442 21.6667 35.866 21.4911 36.1785 21.1785C36.4911 20.8659 36.6667 20.442 36.6667 20C36.6667 19.558 36.4911 19.134 36.1785 18.8215C35.866 18.5089 35.442 18.3333 35 18.3333ZM6.18333 10.4833C6.02483 10.3316 5.83792 10.2127 5.63333 10.1333C5.32982 10.0057 4.99529 9.97083 4.67198 10.0331C4.34866 10.0954 4.05104 10.2521 3.81667 10.4833C3.66945 10.6453 3.55107 10.8314 3.46667 11.0333C3.37849 11.2328 3.33295 11.4485 3.33295 11.6667C3.33295 11.8848 3.37849 12.1005 3.46667 12.3C3.55107 12.502 3.66945 12.688 3.81667 12.85C3.97867 12.9972 4.16469 13.1156 4.36667 13.2C4.67019 13.3276 5.00471 13.3625 5.32802 13.3002C5.65134 13.2379 5.94896 13.0813 6.18333 12.85C6.33055 12.688 6.44893 12.502 6.53333 12.3C6.62151 12.1005 6.66706 11.8848 6.66706 11.6667C6.66706 11.4485 6.62151 11.2328 6.53333 11.0333C6.44893 10.8314 6.33055 10.6453 6.18333 10.4833ZM35 26.6667H11.6667C11.2246 26.6667 10.8007 26.8423 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333C10 28.7754 10.1756 29.1993 10.4882 29.5118C10.8007 29.8244 11.2246 30 11.6667 30H35C35.442 30 35.866 29.8244 36.1785 29.5118C36.4911 29.1993 36.6667 28.7754 36.6667 28.3333C36.6667 27.8913 36.4911 27.4674 36.1785 27.1548C35.866 26.8423 35.442 26.6667 35 26.6667Z"
						fill="black"
					/>
				</svg>
			</button>
			{positionError ? <GeolocationError></GeolocationError> : null}
			{show ? (
				<motion.div
					className={styles.show}
					initial={{ opacity: 0, translateY: -50 }}
					animate={{ opacity: 1, translateY: 0 }}
					key={styles}
					exit={{ opacity: 0, translateY: 0 }}
				>
					<Search
						placeholder={"Type your city..."}
						search={search}
						onSearchTextChange={setSearch}
					></Search>
					<CitiesList
						style={{
							flexDirection: "column",
							alignItems: "flex-start",
							height: 300,
							overflow: "overlay",
						}}
						cities={allCities.filter(({ name }) =>
							name.toLowerCase().includes(search.toLowerCase())
						)}
						close={showSearchBar}
						fetch={fetchWeatherByCity}
					></CitiesList>
				</motion.div>
			) : null}
			<div className={styles.cards_container}>
				<WeatherTempCard props={weather}></WeatherTempCard>
				<WeatherCityCard
					background={cityBackground}
					weatherData={weather}
					cityData={city}
				></WeatherCityCard>
			</div>
			<CitiesList
				cities={popularCities}
				fetch={fetchWeatherByCity}
				close={() => {}}
			></CitiesList>
		</motion.div>
	) : (
		<Loader width={64} height={64} color={"white"}></Loader>
	);
}

export default Weather;
