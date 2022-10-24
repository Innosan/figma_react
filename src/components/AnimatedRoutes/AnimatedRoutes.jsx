import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import EmojiFinder from "../../pages/EmojiFinderPage/EmojiFinder.jsx";
import Weather from "../../pages/WeatherPage/Weather.jsx";
import HarryPotter from "../../pages/HarryPotterPage/HarryPotter.jsx";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location}>
				<Route path={"/"} element={<EmojiFinder />} />
				<Route path={"/weather"} element={<Weather />} />
				<Route path={"/harry-potter"} element={<HarryPotter />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
