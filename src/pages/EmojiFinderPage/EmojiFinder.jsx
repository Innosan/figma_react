import React, { useEffect, useState } from "react";

import EmojiList from "../../components/EmojiList/EmojiList.jsx";
import Search from "../../components/Search/Search.jsx";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";

import logo from "../../assets/icons/PagesLogos/emojiFinderLogo.svg";

import { motion } from "framer-motion";

function EmojiFinder() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("https://emoji-api-app.herokuapp.com/")
			.then((res) => res.json())
			.then((result) => {
				setIsLoaded(true);
				setItems(result);
			});
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			key={logo}
			exit={{ opacity: 0, translateX: 0, transition: { duration: 1 } }}
		>
			<PageHeading pageHeading={"Emoji Finder"} pageIcon={logo} />
			<Search
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
	);
}

export default EmojiFinder;
