import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
						<li>
							<Link to="/add-product">Add product</Link>
						</li>
						<li>
							<Link to="/all-products">All products</Link>
						</li>
						<li>
							<Link to="/all-notes">All Notes</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
