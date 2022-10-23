import React from "react";
import styles from "./EmojiItem.module.scss";

function EmojiItem(item) {
	return (
		<div className={styles.item_container}>
			<p className={styles.item_icon}>{item.props.symbol}</p>
			<p className={styles.item_title}>{item.props.title}</p>
			<p className={styles.item_keywords}>{item.props.keywords}</p>
		</div>
	);
}

export default EmojiItem;
