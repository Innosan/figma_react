import React, { useEffect, useState } from "react";

function usePosition() {
	const [position, setPosition] = useState({});
	const [positionError, setPositionError] = useState(false);

	const onChange = (pos) => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setPosition(pos.coords);
		});
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		geo.getCurrentPosition(
			(pos) => {
				setPosition(pos.coords);
			},
			(positionError) => {
				setPositionError(true);

				fetch("https://api.ipify.org")
					.then((response) => response.text())
					.then((ip) => {
						fetch(`http://ip-api.com/json/${ip}`)
							.then((response) => response.json())
							.then((position) => {
								let coords = {
									latitude: position.lat,
									longitude: position.lon,
								};

								setPosition(coords);
							});
					})
					.catch((error) => {
						console.log(error);
					});
			}
		);

		let watcher = geo.watchPosition(onChange);

		return () => geo.clearWatch(watcher);
	}, []);

	return {
		latitude: position.latitude,
		longitude: position.longitude,
		positionError,
	};
}

export default usePosition;
