import React from "react";

import styles from "./ToolCard.module.scss";

function ToolCard({ toolTitle, toolLogo, toolLink }) {
	return (
		<a
			className={styles.tool_card}
			href={toolLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={toolLogo} alt={toolLogo} />
			<p>{toolTitle}</p>
		</a>
	);
}

export default ToolCard;
