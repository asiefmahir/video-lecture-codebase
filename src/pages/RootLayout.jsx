import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<nav>
					<ul>
						<li>
							<Link to={`/`}>Home</Link>
						</li>
						<li>
							<Link to={`/about`}>About</Link>
						</li>
						<li>
							<Link to={`/all-notes`}>All Notes</Link>
						</li>
						<li>
							<Link to={`/all-posts`}>All Posts</Link>
						</li>
						<li>
							<Link to={`/all-users`}>All Users</Link>
						</li>
						<li>
							<Link to={`/counter-app`}>Counter App</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
