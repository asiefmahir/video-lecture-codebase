import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
	const { id } = useParams();
	const {
		data: post,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, null);

	console.log(id, "from postDetails Page");
	if (isLoading) {
		return <h3>Loading.......</h3>;
	}
	if (errorMessage) {
		return <h3>{errorMessage}</h3>;
	}
	return (
		<div>
			<h2>Post Details Page of Post Id - {id}</h2>
			<p>Post Title - {post?.title}</p>
			<p>Post Description - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
