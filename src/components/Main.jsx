import "@css/Main.css";
import Aos from "aos";
import { CaretDown } from "@phosphor-icons/react";
import { Desktop, Tablet, Mobile } from "./common/MediaQuery";
import { useEffect } from "react";

const Main = () => {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Desktop>
				<div id="main">
					<div className="welcome">
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="0"
							data-aos-offset="300"
						>
							WELCOME TO
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="300"
						>
							YOON&apos;S
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="600"
						>
							FRONTEND PORTFOLIO!
						</p>
					</div>
					<div className="explore">
						<span>EXPLORE</span>
						<CaretDown
							size={24}
							weight="light"
							className="arrow-icon"
						/>
					</div>
				</div>
			</Desktop>
			<Tablet>
				<div id="main">
					<div className="welcome">
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="0"
							data-aos-offset="300"
						>
							WELCOME TO
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="300"
						>
							YOON&apos;S
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="600"
						>
							FRONTEND PORTFOLIO!
						</p>
					</div>
					<div className="explore">
						<span>EXPLORE</span>
						<CaretDown
							size={24}
							weight="light"
							className="arrow-icon"
						/>
					</div>
				</div>
			</Tablet>
			<Mobile>
				<div id="main">
					<div className="welcome">
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="0"
							data-aos-offset="300"
						>
							WELCOME TO
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="300"
						>
							YOON&apos;S
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="600"
						>
							FRONTEND
						</p>
						<p
							data-aos="fade-up"
							data-aos-easing="ease-in-out-back"
							data-aos-duration="1000"
							data-aos-delay="900"
						>
							PORTFOLIO!
						</p>
					</div>
					<div className="explore">
						<span>EXPLORE</span>
						<CaretDown
							size={24}
							weight="light"
							className="arrow-icon"
						/>
					</div>
				</div>
			</Mobile>
		</>
	);
};

export default Main;
