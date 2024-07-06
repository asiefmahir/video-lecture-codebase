import { memo } from "react";

const CounterAppTitle = memo(({ value }) => {
	console.log("I am CounterAppTitle");
	return <p>The value of the Counter is {value}</p>;
});

export default CounterAppTitle;
