import { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [counter, setCounter] = useState(10);
	const [counter2, setCounter2] = useState(22);

	// Re-Render

	useEffect(() => {
		console.log("I am inside side-effect");
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
			.then((res) => res.json())
			.then((data) => {
				// state set/change
				setPosts(data);
			});
	}, []);

	console.log("I am re-rendering");

	return (
		<div className="App">
			<h2>All Posts</h2>
			<ul>
				{posts?.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>

			<p>The value of the counter is {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increase By 1
			</button>
			<hr />
			<p>The value of the counter is {counter2}</p>
			<button onClick={() => setCounter2(counter2 + 3)}>
				Increase By 3
			</button>
		</div>
	);
}

/**
 * A component must fullfil 3 criteria:
 *    1) A component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
