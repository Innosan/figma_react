import React from "react";

import styles from "./GeolocationError.module.scss";

function GeolocationError() {
	return (
		<div className={styles.container}>
			<p>
				Осторожно, выключена геолокация!
				<br />
				Результаты могут быть неточными!
			</p>
		</div>
	);
}

export default GeolocationError;
