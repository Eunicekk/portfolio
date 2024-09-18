import "@css/About.css";
import Aos from "aos";
import { useEffect } from "react";
import { Desktop, Tablet, Mobile } from "./common/MediaQuery";
import profile from "@assets/profile.jpg";

const About = () => {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Desktop>
				<div id="about">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						ABOUT.
					</h1>
					<div
						className="about-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="profile">
							<img
								src={profile}
								alt="profile"
							/>
						</div>
						<div className="description">
							<p>안녕하세요, 프론트엔드 개발자 김윤입니다.</p>
							<div className="intro">
								<ul>
									<li>🪐 성실함을 모토로 꾸준히 성장하기 위해 노력합니다.</li>
									<li>🪐 새로운 기술을 학습하고 적용하는 것에 흥미를 가집니다.</li>
									<li>🪐 사용자의 편의를 가장 우선으로 생각합니다.</li>
								</ul>
							</div>
							<hr />
							<div className="education">
								<ul>
									<li>🪐 SSAFY 11기</li>
									<li>🪐 JAVA 기반 디지털 컨버전스 풀스택 개발자 과정 수료</li>
									<li>🪐 중앙대학교 미디어커뮤니케이션, 문화콘텐츠융합 전공</li>
								</ul>
							</div>
							<hr />
							<div className="certificate">
								<ul>
									<li>TOEIC 915</li>
									<li>TOEIC Speaking IH</li>
									<br />
									<li>정보처리기사</li>
									<li>SQLD</li>
									<br />
									<li>상공회의소 한자</li>
									<li>GTQ 포토샵 1급</li>
									<li>컴퓨터활용능력 1급</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Desktop>
			<Tablet>
				<div id="about">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						ABOUT.
					</h1>
					<div
						className="about-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="profile">
							<img
								src={profile}
								alt="profile"
							/>
						</div>
						<div className="description">
							<p>안녕하세요, 프론트엔드 개발자 김윤입니다.</p>
							<div className="intro">
								<ul>
									<li>🪐 성실함을 모토로 꾸준히 성장하기 위해 노력합니다.</li>
									<li>🪐 새로운 기술을 학습하고 적용하는 것에 흥미를 가집니다.</li>
									<li>🪐 사용자의 편의를 가장 우선으로 생각합니다.</li>
								</ul>
							</div>
							<hr />
							<div className="education">
								<ul>
									<li>🪐 SSAFY 11기</li>
									<li>🪐 JAVA 기반 디지털 컨버전스 풀스택 개발자 과정 수료</li>
									<li>🪐 중앙대학교 미디어커뮤니케이션, 문화콘텐츠융합 전공</li>
								</ul>
							</div>
							<hr />
							<div className="certificate">
								<ul>
									<li>TOEIC 915</li>
									<li>TOEIC Speaking IH</li>
									<li>정보처리기사</li>
									<li>SQLD</li>
									<br />
									<li>상공회의소 한자</li>
									<li>GTQ 포토샵 1급</li>
									<li>컴퓨터활용능력 1급</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Tablet>
			<Mobile>
				<div id="about">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						ABOUT.
					</h1>
					<div
						className="about-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="profile">
							<img
								src={profile}
								alt="profile"
							/>
						</div>
						<div className="description">
							<p>
								안녕하세요, <br /> 프론트엔드 개발자 김윤입니다.
							</p>
							<div className="intro">
								<ul>
									<li>🪐 성실함을 모토로 꾸준히 성장하기 위해 노력합니다.</li>
									<li>🪐 새로운 기술을 학습하고 적용하는 것에 흥미를 가집니다.</li>
									<li>🪐 사용자의 편의를 가장 우선으로 생각합니다.</li>
								</ul>
							</div>
							<hr />
							<div className="education">
								<ul>
									<li>🪐 SSAFY 11기</li>
									<li>🪐 JAVA 기반 디지털 컨버전스 풀스택 개발자 과정 수료</li>
									<li>🪐 중앙대학교 미디어커뮤니케이션, 문화콘텐츠융합 전공</li>
								</ul>
							</div>
							<hr />
							<div className="certificate">
								<ul>
									<li>TOEIC 915</li>
									<li>TOEIC Speaking IH</li>
									<br />
									<li>정보처리기사</li>
									<li>SQLD</li>
									<li>컴퓨터활용능력 1급</li>
									<br />
									<li>상공회의소 한자</li>
									<li>GTQ 포토샵 1급</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Mobile>
		</>
	);
};

export default About;
