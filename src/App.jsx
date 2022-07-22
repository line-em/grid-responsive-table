import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
	return (
		<main className="app">
			<Sidebar />
			<Main />
		</main>
	);
}

export default App;
