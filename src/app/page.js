import Image from "next/image";

import GridLayout from "./components/GridLayout";

export default async function Home() {
	console.log("I am home page");

	return (
		<>
			<main>
				<div>
					<div className="page-banner">
						<div className="page-banner__details">
							<div className="page-banner__details__title">
								<h1>Our E-com site</h1>
							</div>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="section__head">
								<div className="product__details__title">
									<h2>All Products</h2>
								</div>
							</div>
							<div className="section__content">
								<div className="grid three">
									<GridLayout />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
