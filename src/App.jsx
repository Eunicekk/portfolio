import "./App.css";
import "aos/dist/aos.css";
import { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { makeStars } from "@utils/makeStars";
import TheHeader from "@components/common/TheHeader";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Record from "@pages/Record";
import Post from "@pages/Post";
import "@utils/preventMouse";

function App() {
	const skyRef = useRef(null);

	useEffect(() => {
		if (skyRef.current) makeStars(skyRef.current);

		const handleResize = () => {
			if (skyRef.current) makeStars(skyRef.current);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div id="App">
			<TheHeader />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/project"
					element={<Project />}
				/>
				<Route
					path="/record"
					element={<Record />}
				/>
				<Route
					path="/record/:index"
					element={<Post />}
				/>
			</Routes>

			<div className="background"></div>
			<div className="overlay"></div>
			<svg
				className="sky"
				ref={skyRef}
			/>
		</div>
	);
}

export default App;
