import { BrowserRouter } from "react-router-dom";

import "./App.css";

//components
import Header from "./components/Header/Header.jsx";

//pages
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<AnimatedRoutes></AnimatedRoutes>
			</div>
		</BrowserRouter>
	);
}

export default App;
