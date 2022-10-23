import React from "react";
import style from "./Search.module.scss";

function Search(props) {
	return (
		<div className={style.search_container}>
			<label htmlFor="">
				<input
					className={style.input_bar}
					type="text"
					placeholder={"Keywords..."}
				/>
			</label>
		</div>
	);
}

export default Search;
