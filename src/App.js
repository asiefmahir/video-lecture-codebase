import { useReducer } from "react";

import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

const counterReducer = (state, action) => {
	// console.log(state, "state");
	console.log(action, "action");
	// if (action === "increase_counter") {
	// 	return state + 1;
	// } else if (action === "decrease_counter") {
	// 	return state - 1;
	// }

	switch (action.type) {
		case "increase_counter": {
			return state + action.payload;
		}

		case "decrease_counter": {
			return state - action.payload;
		}
		default: {
			return state;
		}
	}
};

function App(props) {
	console.log("I am re-rendering");
	// Re-Render
	const [counter, dispatch] = useReducer(counterReducer, 20);
	return (
		<div className="App">
			<StudentForm />
			<StudentSection />
		</div>
	);
}

/**
 * A component must fullfil 3 criteria:
 *    1) A component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
