import React from "react";
import styles from "../EmojiItem/EmojiItem.module.scss";

function CharacterItem(item) {
	return (
		<div className={styles.item_container}>
			<h2>{props.characterName}</h2>
			<div>
				<img src="" alt="" />
				<p className={styles.item_icon}>{item.props.symbol}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_title}>{item.props.title}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_keywords}>{item.props.keywords}</p>
			</div>
		</div>
	);
}

export default CharacterItem;
