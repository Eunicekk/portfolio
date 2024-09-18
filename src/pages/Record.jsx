import "@css/Record.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import Aos from "aos";
import { Desktop, Tablet, Mobile } from "@components/common/MediaQuery";

const Record = () => {
	const [posts, setPosts] = useState([]);
	const [visiblePosts, setVisiblePosts] = useState([]);
	const [page, setPage] = useState(1);
	const postCount = 12;

	useEffect(() => {
		Aos.init();

		const loadPosts = async () => {
			const fileNames = ["a-1.md", "a-2.md", "a-3.md", "a-4.md", "a-5.md", "a-6.md", "a-7.md", "a-8.md"];

			const posts = await Promise.all(
				fileNames.map(async (fileName) => {
					const response = await fetch(`/posts/${fileName}`);
					const content = await response.text();

					const indexMatch = content.match(/index:\s*"(.*?)"/);
					const titleMatch = content.match(/title:\s*"(.*?)"/);
					const dateMatch = content.match(/date:\s*"(.*?)"/);

					return {
						index: indexMatch ? indexMatch[1] : "인덱스 오류",
						title: titleMatch ? titleMatch[1] : "제목 오류",
						date: dateMatch ? dateMatch[1] : "날짜 오류",
						fileName: fileName.replace(".md", ""),
					};
				}),
			);

			const reversePosts = posts.reverse();
			setPosts(reversePosts);
			setVisiblePosts(reversePosts.slice(0, postCount));
		};

		loadPosts();
	}, []);

	const loadMorePosts = () => {
		setPage((prevPage) => {
			const nextPage = prevPage + 1;
			const end = nextPage * postCount;
			setVisiblePosts(posts.slice(0, end));
			return nextPage;
		});
	};

	return (
		<>
			<Desktop>
				<div id="record">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Record.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						프로젝트 회고, 새롭게 배운 기술, 알고리즘 풀이 등을 기록합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{visiblePosts.map((post) => (
							<li key={post.index}>
								<Link to={`/record/${post.index}`}>
									<p>{post.title}</p>
									<span>{post.date}</span>
								</Link>
							</li>
						))}
					</ul>
					{visiblePosts.length < posts.length && (
						<p
							className="page-click"
							onClick={loadMorePosts}
						>
							<span>게시물 더 보기</span>
							<CaretDown
								size={24}
								weight="light"
								className="arrow-icon"
							/>
						</p>
					)}
				</div>
			</Desktop>
			<Tablet>
				<div id="record">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Record.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						프로젝트 회고, 새롭게 배운 기술, 알고리즘 풀이 등을 기록합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{visiblePosts.map((post) => (
							<li key={post.index}>
								<Link to={`/record/${post.index}`}>
									<p>{post.title}</p>
									<span>{post.date}</span>
								</Link>
							</li>
						))}
					</ul>
					{visiblePosts.length < posts.length && (
						<p
							className="page-click"
							onClick={loadMorePosts}
						>
							<span>게시물 더 보기</span>
							<CaretDown
								size={24}
								weight="light"
								className="arrow-icon"
							/>
						</p>
					)}
				</div>
			</Tablet>
			<Mobile>
				<div id="record">
					<h1
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						Record.
					</h1>
					<p
						className="explain"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
					>
						프로젝트 회고, 새롭게 배운 기술,
						<br /> 알고리즘 풀이 등을 기록합니다.
					</p>
					<ul
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="500"
						data-aos-delay="500"
					>
						{visiblePosts.map((post) => (
							<li key={post.index}>
								<Link to={`/record/${post.index}`}>
									<p>{post.title}</p>
									<span>{post.date}</span>
								</Link>
							</li>
						))}
					</ul>
					{visiblePosts.length < posts.length && (
						<p
							className="page-click"
							onClick={loadMorePosts}
						>
							<span>게시물 더 보기</span>
							<CaretDown
								size={24}
								weight="light"
								className="arrow-icon"
							/>
						</p>
					)}
				</div>
			</Mobile>
		</>
	);
};

export default Record;
