/**
 *
 * props = {
 *      name: "SR Setu",
 *      email: "srsetu@gmail.com",
 *      phone: "+245456452132452",
 *      github: "github.com/srsetu",
 *      skills: ["JS", "WP", "CSS", "REACT", "Next"],
 *      interests: ["Chess", "Football", "Entrepreneurship"],
 *      socialLinks: [{platformName: "FB", handle: "fb/srsetu"}, {platformName: "Twitter", handle: "x/srsetu"}, {platformName: "LinkedIn", handle: "linkedin/In/srsetu"}]
 *
 *
 * }
 */

const BioData = (props) => {
	console.log(props, "props");
	// let age = 20;
	return (
		<div className="bio-data">
			<div className="personal-info">
				<h2>BioData of {props.name}</h2>
				<p>
					<strong>Email: </strong>
					{props.email}
				</p>
				<p>
					<strong>Phone: </strong>
					{props.phone}
				</p>
				<p>
					<strong>Github: </strong>
					{props.github}
				</p>
			</div>

			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{props?.skills?.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests:</h2>
				<ul>
					{props?.interests?.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
			<div className="social-links">
				<h2>My Social Medias:</h2>
				<ul>
					{props?.socialLinks?.map((socialLink) => (
						<li key={socialLink.handle}>
							<strong>{socialLink.platformName}: </strong>
							{socialLink.handle}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// function add(num1, num2) {
// 	return num1 + num2;
// }

// add(10, 20);

// add(100, 200);

// add(400, 600);

export default BioData;
