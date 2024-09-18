import "@css/Project.css";
import { useEffect } from "react";
import Aos from "aos";
import { Desktop, Tablet, Mobile } from "@components/common/MediaQuery";
import projectData from "@utils/project.json";

const Project = () => {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Desktop>
				<div id="project">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Project.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						지금까지 참여한 프로젝트입니다. 클릭하면 관련 GitHub로 이동합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{projectData.map((project) => (
							<li key={project.index}>
								<a
									href={project.link}
									target="_blank"
								>
									<div className="project-wrap">
										<div className="image-wrap">
											<img
												src={project.image}
												alt={project.name}
												className="image"
											/>
										</div>
										<h2 className="name">{project.name}</h2>
										<p className="duration">{project.duration}</p>
										<p className="description">
											<strong>[설명]&nbsp;&nbsp;</strong>
											{project.description}
										</p>
										<p className="role">
											<strong>[역할]&nbsp;&nbsp;</strong>
											{project.role}
										</p>
									</div>
									<div className="languages">
										{project.languages.map((language) => (
											<span key={language}># {language}</span>
										))}
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</Desktop>
			<Tablet>
				<div id="project">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Project.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						지금까지 참여한 프로젝트입니다. 클릭하면 관련 GitHub로 이동합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{projectData.map((project) => (
							<li key={project.index}>
								<a
									href={project.link}
									target="_blank"
								>
									<div className="project-wrap">
										<div className="image-wrap">
											<img
												src={project.image}
												alt={project.name}
												className="image"
											/>
										</div>
										<h2 className="name">{project.name}</h2>
										<p className="duration">{project.duration}</p>
										<p className="description">
											<strong>[설명]&nbsp;&nbsp;</strong>
											{project.description}
										</p>
										<p className="role">
											<strong>[역할]&nbsp;&nbsp;</strong>
											{project.role}
										</p>
									</div>
									<div className="languages">
										{project.languages.map((language) => (
											<span key={language}># {language}</span>
										))}
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</Tablet>
			<Mobile>
				<div id="project">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Project.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						지금까지 참여한 프로젝트입니다.
						<br /> 클릭하면 관련 GitHub로 이동합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{projectData.map((project) => (
							<li key={project.index}>
								<a
									href={project.link}
									target="_blank"
								>
									<div className="project-wrap">
										<div className="image-wrap">
											<img
												src={project.image}
												alt={project.name}
												className="image"
											/>
										</div>
										<h2 className="name">{project.name}</h2>
										<p className="duration">{project.duration}</p>
										<p className="description">
											<strong>[설명]&nbsp;&nbsp;</strong>
											{project.description}
										</p>
										<p className="role">
											<strong>[역할]&nbsp;&nbsp;</strong>
											{project.role}
										</p>
									</div>
									<div className="languages">
										{project.languages.map((language) => (
											<span key={language}># {language}</span>
										))}
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</Mobile>
		</>
	);
};

export default Project;
