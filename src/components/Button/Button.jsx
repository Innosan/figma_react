import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
	return (
		<button className={styles.city_button} onClick={props.onClick}>
			{props.cityName}
		</button>
	);
}

export default Button;
