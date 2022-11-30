import React, {useEffect, useState} from "react";
import logo from "../../assets/icons/PagesLogos/harryPotterLogo.svg";
import styles from "./HarryPotter.module.scss";

import { motion } from "framer-motion";

import Search from "../../components/Search/Search.jsx";
import Select from "../../components/Select/Select.jsx";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import CharacterList from "../../components/CharacterList/CharacterList.jsx";
import axios from "axios";
import Loader from "../../components/Loader/Loader.jsx";

function HarryPotter(props) {
	const [characterList, setCharacterList] = useState([]);
	const [search, setSearch] = useState("");

	const [isLoaded, setIsLoaded] = useState(false);

	const characterURL = "http://hp-api.herokuapp.com/api/characters";

	const fetchCharacters = () => {
		axios.get(characterURL).then((res) => {
			setCharacterList(res.data);
		})
	}

	useEffect(() => {
		fetchCharacters();
		setIsLoaded(true);
	}, []);

	return isLoaded ? (
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
			<CharacterList props={characterList}>

			</CharacterList>
		</motion.div>
	) : (
		<Loader width={64} height={64} color={"white"}></Loader>
	);
}

export default HarryPotter;
