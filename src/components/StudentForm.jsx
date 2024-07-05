import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
	const { editMode, studentName, submitHandler, changeNameHandler } =
		useContext(StudentCtx);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={studentName}
				onChange={changeNameHandler}
			/>
			<button type="submit">
				{editMode ? "Update Student" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
