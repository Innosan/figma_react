import React, {useEffect, useState} from 'react';

function usePosition() {
	const [position, setPosition] = useState({longitude: 0, latitude: 0});

	const onChange = (pos) => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setPosition(pos.coords)
		})
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		geo.getCurrentPosition((pos) => {
			setPosition(pos.coords)
		})

		let watcher = geo.watchPosition(onChange)

	}, []);

	return (
		position
	);
}

export default usePosition;