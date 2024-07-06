import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, []);
	console.log(id, "from postDetails Page");
	return (
		<div>
			<h2>Post Details Page of Post Id - {id}</h2>
			<p>Post Title - {post?.title}</p>
			<p>Post Description - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
