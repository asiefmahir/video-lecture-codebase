import { useState } from "react";
import "./App.css";

function App() {
	// Re-Render
	console.log("I am called");

	// State
	const [dynamicCounter, setDynamicCounter] = useState(20);
	const [dynamicCounter2, setDynamicCounter2] = useState(15);

	const increaseHandler = () => {
		setDynamicCounter(dynamicCounter + 1);
		// setDynamicCounter(20 + 1)
		// setDynamicCounter(21)

		// dynamicCounter = 21
	};
	const decreaseHandler = () => {
		setDynamicCounter(dynamicCounter - 1);
	};

	const increaseHandler2 = () => {
		setDynamicCounter2(dynamicCounter2 + 1);
		// setDynamicCounter(20 + 1)
		// setDynamicCounter(21)

		// dynamicCounter = 21
	};
	const decreaseHandler2 = () => {
		setDynamicCounter(dynamicCounter2 - 1);
	};

	return (
		<div className="App">
			<div className="counter-app">
				<p>The value of the counter is {dynamicCounter}</p>
				<button onClick={increaseHandler}>Increase By 1</button>
				<button onClick={decreaseHandler}>Decrease By 1</button>
			</div>
			<div className="counter-app-2">
				<p>The value of the counter is {dynamicCounter2}</p>
				<button onClick={increaseHandler2}>Increase By 1</button>
				<button onClick={decreaseHandler2}>Decrease By 1</button>
			</div>
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
