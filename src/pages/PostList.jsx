import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/middlewares";

const PostList = () => {
	const { isLoading, posts, errorMessage } = useSelector(
		(storeState) => storeState.post,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPost);
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h2>Loading....</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
