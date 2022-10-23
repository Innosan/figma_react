import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import EmojiFinder from "./components/EmojiFinderPage/EmojiFinder.jsx";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path={"/"} element={<EmojiFinder />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
