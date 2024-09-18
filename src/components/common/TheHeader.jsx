import "@css/TheHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Desktop, Tablet, Mobile } from "./MediaQuery";
import logo from "@assets/logo.png";

const TheHeader = () => {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<>
			<Desktop>
				<div id="header">
					<Link
						to="/"
						className="logo"
					>
						<img
							src={logo}
							alt="푸들"
						/>
						<span>
							YOON&apos;S
							<br />
							PORTFOLIO
						</span>
					</Link>
					<div className="nav">
						<Link to="/project">PROJECT</Link>
						<Link to="/record">RECORD</Link>
					</div>
				</div>
			</Desktop>
			<Tablet>
				<div id="header">
					<Link
						to="/"
						className="logo"
					>
						<img
							src={logo}
							alt="푸들"
						/>
						<span>
							YOON&apos;S
							<br />
							PORTFOLIO
						</span>
					</Link>
					<div className="nav">
						<Link to="/project">PROJECT</Link>
						<Link to="/record">RECORD</Link>
					</div>
				</div>
			</Tablet>
			<Mobile>
				<div id="header">
					<Link
						to="/"
						className="logo"
					>
						<img
							src={logo}
							alt="푸들"
						/>
						<span>
							YOON&apos;S
							<br />
							PORTFOLIO
						</span>
					</Link>

					<List
						size={32}
						color="white"
						onClick={toggleMenu}
					/>

					<div className={`nav ${menu ? "open" : ""}`}>
						<X
							size={32}
							color="white"
							weight="bold"
							onClick={toggleMenu}
						/>
						<Link
							to="/"
							onClick={toggleMenu}
						>
							HOME
						</Link>
						<Link
							to="/project"
							onClick={toggleMenu}
						>
							PROJECT
						</Link>
						<Link
							to="/record"
							onClick={toggleMenu}
						>
							RECORD
						</Link>
					</div>
				</div>
			</Mobile>
		</>
	);
};

export default TheHeader;
