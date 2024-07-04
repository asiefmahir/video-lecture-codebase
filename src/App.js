import logo from "./logo.svg";
import "./App.css";

import BioData from "./components/BioData";

const bioData = [
	{
		name: "SR Setu",
		email: "srsetu@gmail.com",
		phone: "+245456452132452",
		github: "github.com/srsetu",
		skills: ["JS", "WP", "CSS", "REACT", "Next"],
		interests: ["Chess", "Football", "Entrepreneurship"],
		socialLinks: [
			{ platformName: "FB", handle: "fb/srsetu" },
			{ platformName: "Twitter", handle: "x/srsetu" },
			{ platformName: "LinkedIn", handle: "linkedin/In/srsetu" },
		],
	},
	{
		name: "Mahir Asief",
		email: "asiefmahir1@gmail.com",
		phone: "+468454565456",
		github: "github.com/asiefmahir",
		skills: ["JS", "REACT", "Next"],
		interests: ["Chess", "Football"],
		socialLinks: [
			{ platformName: "FB", handle: "fb/asiefmahir" },
			{ platformName: "Twitter", handle: "x/asiefmahir" },
			{ platformName: "LinkedIn", handle: "linkedin/In/asiefmahir" },
		],
	},
	{
		name: "Sumit Shaha",
		email: "sumitshaha@gmail.com",
		phone: "+468454565456",
		github: "github.com/sumitshaha",
		skills: ["JS", "REACT", "Next"],
		interests: ["Chess", "Football"],
		socialLinks: [
			{ platformName: "FB", handle: "fb/sumitshaha" },
			{ platformName: "Twitter", handle: "x/sumitshaha" },
			{ platformName: "LinkedIn", handle: "linkedin/In/sumitshaha" },
		],
	},
];

function App() {
	// console.log("I am called");
	return (
		<div className="App">
			{bioData.map((singleBioData) => (
				<>
					<BioData
						name={singleBioData.name}
						email={singleBioData.email}
						phone={singleBioData.phone}
						github={singleBioData.github}
						skills={singleBioData.skills}
						interests={singleBioData.interests}
						socialLinks={singleBioData.socialLinks}
					/>
					<hr />
				</>
			))}
		</div>
	);
}

// BioData({p})

/**
 * A component must fullfil 3 criteria:
 *    1) A component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
