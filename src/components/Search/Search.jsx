import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";

function Search(props) {
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		props.onLoaded(searchQuery);
	}, [searchQuery]);

	return (
		<div>
			<label htmlFor="">
				<input
					className={styles.input_bar}
					type="text"
					placeholder={props.placeholder}
					onChange={(event) => {
						setSearchQuery(event.target.value);
					}}
				/>
			</label>
		</div>
	);
}

export default Search;
