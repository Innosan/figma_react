import axios from "axios";

import { useEffect, useState } from "react";

import usePosition from "./usePosition.js";

const useAxiosWeather = () => {
	const [weatherData, setWeatherData] = useState({});
	const [cityData, setCityData] = useState({});
	const [cityBackgroundData, setCityBackgroundData] = useState({});

	const [error, setError] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	const { latitude, longitude, positionError } = usePosition();

	let WeatherAPIKey = "ece19822df9d679525a51b5d1f8d566a";
	let CityAPIKey = "25b4c94d8c42415e9df76a57cab8b781";
	let UnsplashAPIKey = "gcK-21RopHVCGDUNDowX9e41Uy32hvBwV_YjnUPczAw";

	let weatherURL,
		cityURL,
		unsplashURL = "";

	if (latitude) {
		weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherAPIKey}`;
		cityURL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=en&key=${CityAPIKey}`;
	}

	function fetchWeather() {
		(async () => {
			try {
				const response = await axios.get(weatherURL);

				setWeatherData(response.data);

				axios.get(cityURL).then((res) => {
					setCityData(res.data);

					unsplashURL = `https://api.unsplash.com/search/photos/?query=${res.data.results[0].components.city}&client_id=${UnsplashAPIKey}`;

					axios.get(unsplashURL).then((res) => {
						setCityBackgroundData(res.data);
						setIsLoaded(true);
					});
				});
			} catch (error) {
				setError(error.message);
			}
		})();
	}

	/**
	 * updating app data on button click,
	 * for example click on mumbai to get mumbai weather etc.
	 *
	 * @param lat - custom latitude, set from buttons like popular cities
	 * @param lon - custom longitude, set from buttons like popular cities
	 */
	function fetchWeatherByCity(lat, lon) {
		weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WeatherAPIKey}`;
		cityURL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&language=en&key=${CityAPIKey}`;

		fetchWeather();
	}

	useEffect(() => {
		if (weatherURL) {
			fetchWeather();
		}
	}, [latitude]);

	return {
		weather: weatherData,
		city: cityData,
		cityBackground: cityBackgroundData,
		error,
		isLoaded,
		fetchWeatherByCity,
		positionError,
	};
};

export default useAxiosWeather;
