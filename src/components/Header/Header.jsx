import styles from "./Header.module.scss";

import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className={styles.header_container}>
			<NavLink to={"/"}>EmojiFinder</NavLink>
			<NavLink to={"/weather"}>Weather</NavLink>
			<NavLink to={"/harry-potter"}>HarryPotter</NavLink>
			<NavLink to={"/guess-number"}>Guess Number</NavLink>
			<NavLink to={"/rock-paper-scissors"}>Rock, Cock</NavLink>
		</header>
	);
}

export default Header;
