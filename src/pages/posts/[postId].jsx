import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
	const router = useRouter();
	if (router.isFallback) {
		return <h3>Data Loading....</h3>;
	}
	return (
		<div>
			<h2>Post Details Page of - {post.id}</h2>
			<h3>The title of the post is {post.title}</h3>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch("http://localhost:4000/posts");
	const posts = await res.json();
	return {
		// paths: [
		//   {
		//     params: {
		//       name: 'next.js',
		//     },
		//   }, // See the "paths" section below
		// ],
		paths: posts.map((post) => ({ params: { postId: post.id } })),
		fallback: true, // false or "blocking"
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://localhost:4000/posts/${params.postId}`);
	const post = await res.json();
	return { props: { post } };
}

export default PostDetails;
