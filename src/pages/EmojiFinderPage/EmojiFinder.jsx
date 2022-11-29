import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import axios from "axios";

import EmojiList from "../../components/EmojiList/EmojiList.jsx";
import Search from "../../components/Search/Search.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";

import logo from "../../assets/icons/PagesLogos/emojiFinderLogo.svg";

function EmojiFinder() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");

	const emojiURL = "https://emoji-api-app.herokuapp.com/";

	useEffect(() => {
		axios.get(emojiURL).then((res) => {
			setItems(res.data);
			setIsLoaded(true);
		});
	}, []);

	return isLoaded ? (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Emoji Finder"} pageIcon={logo} />
			<Search
				placeholder={"Keywords..."}
				onLoaded={(searchQuery) => {
					setSearch(searchQuery);
				}}
			/>
			<EmojiList
				props={items.filter(({ keywords }) =>
					keywords.includes(search.toLowerCase())
				)}
			/>
		</motion.div>
	) : (
		<Loader width={64} height={64} color={"white"}></Loader>
	);
}

export default EmojiFinder;
