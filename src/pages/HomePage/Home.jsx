import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import logo from "../../assets/icons/PagesLogos/homeLogo.svg";
import styles from "./Home.module.scss";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
	const [isFooterVis, setIsFooterVis] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFooterVis(true);
		}, 1000);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Home"} pageIcon={logo}></PageHeading>
			<div className={styles.content}>
				<p>
					This is comprehensive collection of little projects of mine,
					based on React and my retarded knowledge about it.
				</p>
				<p>Feel free to try out every little bit of it!</p>
			</div>
			{isFooterVis ? <Footer></Footer> : null}
		</motion.div>
	);
}

export default Home;
