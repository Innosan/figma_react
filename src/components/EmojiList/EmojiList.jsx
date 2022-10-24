import EmojiItem from "../EmojiItem/EmojiItem.jsx";

import styles from "./EmojiList.module.scss";

import { motion } from "framer-motion";

function EmojiList({ props }) {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 800 }}
			animate={{ opacity: 1, translateY: 0 }}
			key={styles}
			transition={{ duration: 2.1 }}
			exit={{
				opacity: 0,
				translateY: 0,
			}}
		>
			<div className={styles.list_container}>
				{props.map((item) => (
					<EmojiItem key={item.title} props={item}></EmojiItem>
				))}
			</div>
		</motion.div>
	);
}

export default EmojiList;
