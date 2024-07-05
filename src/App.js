import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App(props) {
	// Re-Render

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
