import { memo } from "react";

const Button = memo(({ handler }) => {
	// handler = #000GGBB
	// handler =  #22TTNN
	console.log("I am Button");
	return <button onClick={handler}>Increase By 1</button>;
});

export default Button;
