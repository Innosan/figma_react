import styles from "./PageHeading.module.scss";

import React from "react";

function PageHeading(props) {
	return (
		<h1 className={styles.page_heading}>
			<img src={props.pageIcon} alt="" />
			{props.pageHeading}
		</h1>
	);
}

export default PageHeading;
