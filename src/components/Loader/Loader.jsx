import React from "react";

import { motion } from "framer-motion";

import styles from "./Loader.module.scss";

function Loader(props) {
	return (
		<motion.div
			className={styles.container}
			key={styles}
			initial={{ opacity: 0, translateY: -200 }}
			animate={{ opacity: 1, translateY: 0 }}
			exit={{ opacity: 0, translateY: -200, transition: { duration: 1 } }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.0"
				width={props.width}
				height={props.height}
				viewBox="0 0 128 128"
			>
				<g>
					<path
						d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
						fill={props.color}
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 64 64"
						to="360 64 64"
						dur="1000ms"
						repeatCount="indefinite"
					></animateTransform>
				</g>
			</svg>
		</motion.div>
	);
}

export default Loader;
