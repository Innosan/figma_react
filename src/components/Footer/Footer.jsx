import React from "react";

import { motion } from "framer-motion";

import styles from "./Footer.module.scss";
import githubLogo from "../../assets/icons/SocialIcons/github.svg";
import vkLogo from "../../assets/icons/SocialIcons/vk.svg";
import telegramLogo from "../../assets/icons/SocialIcons/telegram.svg";

function Footer() {
	return (
		<motion.footer
			className={styles.footer}
			key={styles}
			initial={{ opacity: 0, translateY: 200, display: "none" }}
			animate={{ opacity: 1, translateY: 0, display: "flex" }}
			exit={{ opacity: 0, translateY: -200 }}
		>
			<div>
				<p className={styles.footer_heading}>My other projects</p>
				<a
					href="https://github.com/Innosan"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={githubLogo} alt="GitHub" />
				</a>
			</div>
			<div>
				<p className={styles.footer_heading}>Contact me</p>
				<div className={styles.icons}>
					<a
						href="https://vk.com/inno_san"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={vkLogo} alt="VK" />
					</a>
					<a
						href="https://t.me/inno_san"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={telegramLogo} alt="Telegram" />
					</a>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
