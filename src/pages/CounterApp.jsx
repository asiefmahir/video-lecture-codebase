import { useCounter } from "../hooks/useCounter";

const CounterApp = () => {
	const { counter, increaseHandler, decreaseHandler } = useCounter();
	return (
		<div>
			<p>The value of the Counter is {counter}</p>
			<button onClick={increaseHandler}>Increase By 1</button>
			<button onClick={decreaseHandler}>Decrease By 1</button>
		</div>
	);
};

export default CounterApp;
