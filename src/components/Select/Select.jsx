import React from "react";
import styles from "./Select.module.scss";

function Select(props) {
	return (
		<div className={styles.select_container}>
			<label htmlFor="">
				<select name="" id="" className={styles.select}>
					<option value="placeholder" disabled selected>
						Choose one
					</option>
					<option value="Gryffindor">Gryffindor</option>
					<option value="Slytherin">Slytherin</option>
					<option value="Ravenclaw">Ravenclaw</option>
					<option value="Hufflepuff">Hufflepuff</option>
					<option value="Show All">Show All</option>
				</select>
			</label>
		</div>
	);
}

export default Select;
