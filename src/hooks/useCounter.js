import { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(15);

	const increaseHandler = () => {
		setCounter(counter + 1);
	};

	const decreaseHandler = () => {
		setCounter(counter - 1);
	};

	return {
		counter,
		increaseHandler,
		decreaseHandler,
	};
};
