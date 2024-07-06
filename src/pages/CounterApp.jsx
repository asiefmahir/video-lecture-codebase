import { useState, useCallback, useMemo } from "react";
import Title from "../components/Title";
import CounterAppTitle from "../components/CounterAppTitle";
import Button from "../components/Button";

const CounterApp = () => {
	console.log("I am Counter App");
	const [counter, setCounter] = useState(15);
	const [counter2, setCounter2] = useState(10);

	const increaseHandler = useCallback(() => {
		setCounter((currVal) => currVal + 1);
	}, []); // #000GGBB // #22TTNN

	const increaseHandler2 = useCallback(() => {
		setCounter2((currVal) => currVal + 3);
	}, []); // #55ffNN // #88MMKK

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 9999999999) {
			i++;
		}
		return counter % 2 === 0 ? "Counter is Even" : "Counter is Odd";
	}, [counter]);

	return (
		<div>
			<Title />
			<div className="counter-app-1">
				<CounterAppTitle value={counter} />
				{isEven}
				<Button handler={increaseHandler} />
			</div>
			<hr />
			<div className="counter-app-2">
				<CounterAppTitle value={counter2} />
				<Button handler={increaseHandler2} />
			</div>
		</div>
	);
};

export default CounterApp;
