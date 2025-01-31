import Link from "next/link";

const Nav = () => {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link href="/">Shop</Link>
						</li>

						<li>
							<Link href="/add-product">Add product</Link>
						</li>
						<li>
							<Link href="/all-products">All products</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
