import { memo } from "react";

const Title = memo(() => {
	console.log("I am Title");
	return <h2>Our Counter App</h2>;
});

export default Title;
