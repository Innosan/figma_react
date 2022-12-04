import { motion } from "framer-motion";

import logo from "../../assets/icons/PagesLogos/homeLogo.svg";

import viteLogo from "../../assets/logos/vite.svg";
import openWeatherLogo from "../../assets/logos/openweather.svg";
import unsplashLogo from "../../assets/logos/unsplash.svg";
import reactLogo from "../../assets/logos/react.svg";
import framerLogo from "../../assets/logos/framer.svg";
import axiosLogo from "../../assets/logos/axios.svg";

import styles from "./Home.module.scss";

import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ToolCard from "../../components/ToolCard/ToolCard.jsx";

function Home() {
	const tools = [
		{
			title: "OpenWeather API",
			logo: openWeatherLogo,
			link: "https://openweathermap.org/",
		},
		{
			title: "Unsplash API",
			logo: unsplashLogo,
			link: "https://unsplash.com/developers",
		},
		{
			title: "React",
			logo: reactLogo,
			link: "https://reactjs.org/",
		},
		{
			title: "Vite",
			logo: viteLogo,
			link: "https://vitejs.dev/",
		},
		{
			title: "Framer Motion",
			logo: framerLogo,
			link: "https://www.framer.com/motion/",
		},
		{
			title: "Axios",
			logo: axiosLogo,
			link: "https://axios-http.com/",
		},
	];

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
			<div className={styles.tools}>
				<p className={styles.project_heading}>Used Tools</p>
				<div className={styles.tools_container}>
					{tools.map((tool, index) => (
						<ToolCard
							key={index}
							toolLink={tool.link}
							toolTitle={tool.title}
							toolLogo={tool.logo}
							animationDelay={index}
						></ToolCard>
					))}
				</div>
			</div>
			<Footer></Footer>
		</motion.div>
	);
}

export default Home;
