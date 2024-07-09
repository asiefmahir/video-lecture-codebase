const Posts = ({ posts }) => {
	console.log("Posts Rendering");

	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	console.log("I am getStaticProps");
	const res = await fetch("http://localhost:4000/posts");
	const posts = await res.json();
	return { props: { posts }, revalidate: 15 };
}

export default Posts;
