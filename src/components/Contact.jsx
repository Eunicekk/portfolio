import "@css/Contact.css";
import { useEffect } from "react";
import { Envelope, GithubLogo } from "@phosphor-icons/react";
import Aos from "aos";
import { Desktop, Tablet, Mobile } from "./common/MediaQuery";

const Contact = () => {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Desktop>
				<div id="contact">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Contact.
					</h1>
					<div
						className="contact-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="mail">
							<div className="title">
								<Envelope
									size={32}
									weight="fill"
								/>
								EMAIL
							</div>
							<a href="mailto:kate4234@gmail.com">kate4234@gmail.com</a>
						</div>
						<div className="github">
							<div className="title">
								<GithubLogo
									size={32}
									weight="fill"
								/>
								GITHUB
							</div>
							<a href="https://github.com/Eunicekk">https://github.com/Eunicekk</a>
						</div>
					</div>
					<div
						className="mail-form"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="name">
							<label htmlFor="userName">Name</label>
							<input
								type="text"
								id="userName"
								name="userName"
								placeholder="이름을 입력하세요."
							/>
						</div>
						<div className="email">
							<label htmlFor="userEmail">Email</label>
							<input
								type="text"
								id="userEmail"
								name="userEmail"
								placeholder="이메일을 입력하세요."
							/>
						</div>
						<div className="message">
							<label htmlFor="userMessage">Message</label>
							<textarea
								name="userMessage"
								id="userMessage"
								rows={6}
								placeholder="남길 메세지를 입력하세요."
							></textarea>
						</div>
						<button>메일 보내기</button>
					</div>
					<div className="license">
						<p>Copyright 2024. KIM YOON All rights reserved.</p>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="자바 아이콘"
						>
							자바 아이콘 제작자: Freepik - Flaticon
						</a>
						<span className="bar">&nbsp;|&nbsp;</span>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="곰 아이콘"
						>
							곰 아이콘 제작자: Freepik - Flaticon
						</a>
					</div>
				</div>
			</Desktop>
			<Tablet>
				<div id="contact">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Contact.
					</h1>
					<div
						className="contact-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="mail">
							<div className="title">
								<Envelope
									size={32}
									weight="fill"
								/>
								EMAIL
							</div>
							<a href="mailto:kate4234@gmail.com">kate4234@gmail.com</a>
						</div>
						<div className="github">
							<div className="title">
								<GithubLogo
									size={32}
									weight="fill"
								/>
								GITHUB
							</div>
							<a href="https://github.com/Eunicekk">https://github.com/Eunicekk</a>
						</div>
					</div>
					<div
						className="mail-form"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="name">
							<label htmlFor="userName">Name</label>
							<input
								type="text"
								id="userName"
								name="userName"
								placeholder="이름을 입력하세요."
							/>
						</div>
						<div className="email">
							<label htmlFor="userEmail">Email</label>
							<input
								type="text"
								id="userEmail"
								name="userEmail"
								placeholder="이메일을 입력하세요."
							/>
						</div>
						<div className="message">
							<label htmlFor="userMessage">Message</label>
							<textarea
								name="userMessage"
								id="userMessage"
								rows={6}
								placeholder="남길 메세지를 입력하세요."
							></textarea>
						</div>
						<button>메일 보내기</button>
					</div>
					<div className="license">
						<p>Copyright 2024. KIM YOON All rights reserved.</p>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="자바 아이콘"
						>
							자바 아이콘 제작자: Freepik - Flaticon
						</a>
						<span className="bar">&nbsp;|&nbsp;</span>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="곰 아이콘"
						>
							곰 아이콘 제작자: Freepik - Flaticon
						</a>
					</div>
				</div>
			</Tablet>
			<Mobile>
				<div id="contact">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Contact.
					</h1>
					<div
						className="contact-wrap"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="mail">
							<div className="title">
								<Envelope
									size={32}
									weight="fill"
								/>
								EMAIL
							</div>
							<a href="mailto:kate4234@gmail.com">kate4234@gmail.com</a>
						</div>
						<div className="github">
							<div className="title">
								<GithubLogo
									size={32}
									weight="fill"
								/>
								GITHUB
							</div>
							<a href="https://github.com/Eunicekk">https://github.com/Eunicekk</a>
						</div>
					</div>
					<div
						className="mail-form"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="250"
					>
						<div className="name">
							<label htmlFor="userName">Name</label>
							<input
								type="text"
								id="userName"
								name="userName"
								placeholder="이름을 입력하세요."
							/>
						</div>
						<div className="email">
							<label htmlFor="userEmail">Email</label>
							<input
								type="text"
								id="userEmail"
								name="userEmail"
								placeholder="이메일을 입력하세요."
							/>
						</div>
						<div className="message">
							<label htmlFor="userMessage">Message</label>
							<textarea
								name="userMessage"
								id="userMessage"
								rows={6}
								placeholder="남길 메세지를 입력하세요."
							></textarea>
						</div>
						<button>메일 보내기</button>
					</div>
					<div className="license">
						<p>Copyright 2024. KIM YOON All rights reserved.</p>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="자바 아이콘"
						>
							자바 아이콘 제작자: Freepik - Flaticon
						</a>
						<span className="bar">&nbsp;|&nbsp;</span>
						<a
							href="https://www.flaticon.com/kr/free-icons/"
							title="곰 아이콘"
						>
							곰 아이콘 제작자: Freepik - Flaticon
						</a>
					</div>
				</div>
			</Mobile>
		</>
	);
};

export default Contact;
