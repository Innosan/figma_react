import React from "react";

import styles from "./ToolCard.module.scss";

import { motion } from "framer-motion";

function ToolCard({ toolTitle, toolLogo, toolLink, animationDelay }) {
	return (
		<motion.a
			className={styles.tool_card}
			href={toolLink}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, translateY: 100 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{
				delay: animationDelay / 2,
				type: "tween",
				stiffness: 100,
			}}
		>
			<img src={toolLogo} alt={toolLogo} />
			<p>{toolTitle}</p>
		</motion.a>
	);
}

export default ToolCard;
