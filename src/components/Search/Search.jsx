import React, { useEffect, useState } from "react";
import style from "./Search.module.scss";

function Search(props) {
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		props.onLoaded(searchQuery);
	}, [searchQuery]);

	return (
		<div className={style.search_container}>
			<label htmlFor="">
				<input
					className={style.input_bar}
					type="text"
					placeholder={"Keywords..."}
					onChange={(event) => {
						setSearchQuery(event.target.value);
					}}
				/>
			</label>
		</div>
	);
}

export default Search;
