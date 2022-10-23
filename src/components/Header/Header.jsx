import styles from "./Header.module.scss";

import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

function Header() {
	const [mounted, setMounted] = useState(false);
	const nodeRef = useRef(null);

	useEffect(() => {
		setMounted(true);
	});

	return (
		<Transition nodeRef={nodeRef} timeout={0} in={mounted}>
			{(state) => (
				<header
					ref={nodeRef}
					className={styles.header_container + ` ${state}_header`}
				>
					<NavLink to={"/"}>EmojiFinder</NavLink>
					<NavLink to={"/weather"}>Weather</NavLink>
					<NavLink to={"/harry-potter"}>HarryPotter</NavLink>
					<NavLink to={"/guess-number"}>Guess Number</NavLink>
					<NavLink to={"/rock-paper-scissors"}>Rock, Cock</NavLink>
				</header>
			)}
		</Transition>
	);
}

export default Header;
