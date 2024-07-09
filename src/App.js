import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/action-creator/counter";

import "./App.css";
import {
	changeBgColor,
	changeTextColor,
	resetTheme,
} from "./store/action-creator/theme";

function App() {
	const counter = useSelector((storeState) => storeState.counter);
	const theme = useSelector((storeState) => storeState.theme);
	const dispatch = useDispatch();

	return (
		<div
			style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
			className="App"
		>
			<div className="counter-app">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => dispatch(increment(1))}>
					Increase By 1
				</button>
				<button onClick={() => dispatch(decrement(1))}>
					Decrease By 1
				</button>
				<button onClick={() => dispatch(increment(5))}>
					Increase By 5
				</button>
				<button onClick={() => dispatch(decrement(3))}>
					Decrease By 3
				</button>
			</div>
			<br />
			<div className="theme">
				<div className="btn-group-bg">
					<button onClick={() => dispatch(changeBgColor("tomato"))}>
						Change BG Color to Tomato
					</button>
					<button onClick={() => dispatch(changeBgColor("yellow"))}>
						Change BG Color to Yellow
					</button>
					<button onClick={() => dispatch(changeBgColor("red"))}>
						Change BG Color to Red
					</button>
				</div>
				<div className="btn-group-font">
					<button onClick={() => dispatch(changeTextColor("green"))}>
						Change Text Color to green
					</button>
					<button onClick={() => dispatch(changeTextColor("purple"))}>
						Change Text Color to Purple
					</button>
					<button onClick={() => dispatch(changeTextColor("#fff"))}>
						Change Text Color to White
					</button>
				</div>
				<br />
				<button onClick={() => dispatch(resetTheme())}>
					Reset Theme
				</button>
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
