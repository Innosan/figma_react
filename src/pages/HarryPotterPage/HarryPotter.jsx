import React from "react";
import logo from "../../assets/icons/harryPotterLogo.svg";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";

import { motion } from "framer-motion";

function HarryPotter(props) {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Harry Potter"} pageIcon={logo} />
		</motion.div>
	);
}

export default HarryPotter;
