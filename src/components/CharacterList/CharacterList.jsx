import { motion } from "framer-motion";

import styles from "./CharacterList.module.scss";
import CharacterItem from "../CharacterItem/ChatacterItem.jsx";

function CharacterList({ props }) {
	return (
		<motion.div
			key={styles}
			initial={{ opacity: 0, translateY: 800 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ duration: 1 }}
			exit={{
				opacity: 0,
				translateY: 0,
			}}
		>
			<div className={styles.list_container}>
				{props.map((item) => (
					<CharacterItem
						key={item.title}
						props={item}
					></CharacterItem>
				))}
			</div>
		</motion.div>
	);
}

export default CharacterList;
