import React from "react";
import styles from "../EmojiItem/EmojiItem.module.scss";

function CharacterItem(item) {
	return (
		<div className={styles.item_container}>
			<h2>{props.characterName}</h2>
			<img src={item.props.image} alt="Character"/>
			<div>
				<img src="" alt="" />
				<p className={styles.item_icon}>{item.props.name}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_title}>{item.props.actor}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_keywords}>{item.props.gender}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_keywords}>{item.props.house}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_keywords}>{item.props.wand.core}</p>
			</div>
			<div>
				<img src="" alt="" />
				<p className={styles.item_keywords}>{item.props.alive}</p>
			</div>
		</div>
	);
}

export default CharacterItem;
