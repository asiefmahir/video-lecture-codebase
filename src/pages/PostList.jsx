import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostList = () => {
	const posts = useLoaderData();
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
