import React, { useState } from "react";
import logo from "../../assets/icons/PagesLogos/harryPotterLogo.svg";
import styles from "./HarryPotter.module.scss";

import { motion } from "framer-motion";

import Search from "../../components/Search/Search.jsx";
import Select from "../../components/Select/Select.jsx";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";

function HarryPotter(props) {
	const [search, setSearch] = useState("");

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Harry Potter"} pageIcon={logo} />
			<div className={styles.input_container}>
				<Search
					placeholder={"Hermione..."}
					onLoaded={(searchQuery) => {
						setSearch(searchQuery);
					}}
				></Search>
				<Select></Select>
			</div>
		</motion.div>
	);
}

export default HarryPotter;
