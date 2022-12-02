import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";

import { AnimatePresence, motion } from "framer-motion";

function Search(props) {
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		props.onLoaded(searchQuery);
	}, [searchQuery]);

	return (
		<div>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, translateY: -50 }}
					animate={{ opacity: 1, translateY: 0 }}
					key={styles}
					exit={{ opacity: 0, translateY: 0 }}
				>
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
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Search;
