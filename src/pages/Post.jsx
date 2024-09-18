import "@css/Post.css";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { MoonLoader } from "react-spinners";
import { CaretCircleLeft } from "@phosphor-icons/react";
import { Desktop, Tablet, Mobile } from "@components/common/MediaQuery";

const Post = () => {
	const { index } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [weight, setWeight] = useState("regular");
	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	};

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`/posts/${index}.md`);
				const content = await response.text();

				const titleMatch = content.match(/title:\s*"(.*?)"/);
				const dateMatch = content.match(/date:\s*"(.*?)"/);
				const contentMatch = content
					.replace(/index:\s*"(.*?)"/, "")
					.replace(/title:\s*"(.*?)"/, "")
					.replace(/date:\s*"(.*?)"/, "");

				setPost({
					index: index,
					title: titleMatch ? titleMatch[1] : "제목 오류",
					date: dateMatch ? dateMatch[1] : "날짜 오류",
					content: contentMatch,
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [index]);

	if (loading) {
		return <MoonLoader color="#fff" />;
	}

	return (
		<>
			<Desktop>
				<div id="post">
					<h1>
						<CaretCircleLeft
							size={40}
							weight={weight}
							onMouseEnter={() => setWeight("fill")}
							onMouseLeave={() => setWeight("regular")}
							onClick={back}
						/>
						{post.title}
					</h1>
					<p>작성일 : {post.date}</p>
					<ReactMarkdown
						className="markdown"
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw, rehypeHighlight]}
					>
						{post.content}
					</ReactMarkdown>
				</div>
			</Desktop>
			<Tablet>
				<div id="post">
					<h1>
						<CaretCircleLeft
							size={40}
							weight={weight}
							onMouseEnter={() => setWeight("fill")}
							onMouseLeave={() => setWeight("regular")}
							onClick={back}
						/>
						{post.title}
					</h1>
					<p>작성일 : {post.date}</p>
					<ReactMarkdown
						className="markdown"
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw, rehypeHighlight]}
					>
						{post.content}
					</ReactMarkdown>
				</div>
			</Tablet>
			<Mobile>
				<div id="post">
					<h1>
						<CaretCircleLeft
							size={32}
							weight={weight}
							onMouseEnter={() => setWeight("fill")}
							onMouseLeave={() => setWeight("regular")}
							onClick={back}
						/>
						{post.title}
					</h1>
					<p>작성일 : {post.date}</p>
					<ReactMarkdown
						className="markdown"
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw, rehypeHighlight]}
					>
						{post.content}
					</ReactMarkdown>
				</div>
			</Mobile>
		</>
	);
};

export default Post;
