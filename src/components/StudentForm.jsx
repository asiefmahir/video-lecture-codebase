import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
	const { studentStates, submitHandler, changeNameHandler } =
		useContext(StudentCtx);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={studentStates.studentName}
				onChange={changeNameHandler}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
