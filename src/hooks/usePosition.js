import React, { useEffect, useState } from "react";

function usePosition() {
	const [position, setPosition] = useState({});

	const onChange = (pos) => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setPosition(pos.coords);
		});
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		geo.getCurrentPosition((pos) => {
			setPosition(pos.coords);
		});

		let watcher = geo.watchPosition(onChange);
		return () => geo.clearWatch(watcher);
	}, []);

	return position;
}

export default usePosition;
