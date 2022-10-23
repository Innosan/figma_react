import React, { useEffect, useRef, useState } from "react";
import EmojiItem from "../EmojiItem/EmojiItem.jsx";

import styles from "./EmojiList.module.scss";
import { Transition } from "react-transition-group";

function EmojiList({ props }) {
	const [mounted, setMounted] = useState(false);
	const nodeRef = useRef(null);

	useEffect(() => {
		setMounted(true);
	});

	return (
		<Transition nodeRef={nodeRef} timeout={500} in={mounted}>
			{(state) => (
				<div
					ref={nodeRef}
					className={styles.list_container + ` ${state}`}
				>
					{props.map((item) => (
						<EmojiItem key={item.title} props={item}></EmojiItem>
					))}
				</div>
			)}
		</Transition>
	);
}

export default EmojiList;
