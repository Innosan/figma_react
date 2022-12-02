import styles from "./PageHeading.module.scss";

import React from "react";

function PageHeading({ pageHeading, pageIcon }) {
	return (
		<h1 className={styles.page_heading}>
			<img src={pageIcon} alt="" />
			{pageHeading}
		</h1>
	);
}

PageHeading.prop;

export default PageHeading;
