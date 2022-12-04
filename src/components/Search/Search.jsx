import styles from "./Search.module.scss";

import { AnimatePresence, motion } from "framer-motion";

function Search({ placeholder, search, onSearchTextChange }) {
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
							value={search}
							onChange={(event) =>
								onSearchTextChange(event.target.value)
							}
							placeholder={placeholder}
						/>
					</label>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Search;
