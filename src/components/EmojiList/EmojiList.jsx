import React from "react";
import EmojiItem from "../EmojiItem/EmojiItem.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./EmojiList.module.scss";

function EmojiList({ props }) {
	return (
		<TransitionGroup component={"div"} className={styles.list_container}>
			{props.map((item) => (
				// <CSSTransition
				// 	classNames={"note"}
				// 	key={item.title}
				// 	timeout={400}
				// >
				<EmojiItem key={item.title} props={item}></EmojiItem>
				// </CSSTransition>
			))}
		</TransitionGroup>
	);
}

export default EmojiList;
