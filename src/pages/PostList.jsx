import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostList } from "../store/reducers/post";

const PostList = () => {
	const { isLoading, posts, errorMessage } = useSelector(
		(storeState) => storeState.post,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPostList());
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
