import { createContext, useState, useReducer } from "react";
import { studentReducer } from "../reducers/student";

export const StudentCtx = createContext();

const initState = {
	studentName: "",
	students: [],
	ediMode: false,
	editableStudent: null,
};

const StudentProvider = (props) => {
	const { children } = props;

	const [studentStates, dispatch] = useReducer(studentReducer, initState);

	const changeNameHandler = (e) => {
		dispatch({ type: "change_student_name", payload: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (studentStates.studentName.trim() === "") {
			return alert(`Please Provide a valid name`);
		}

		studentStates.editMode
			? dispatch({ type: "update_student" })
			: dispatch({ type: "create_student" });
	};

	const makePresentHandler = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`This student is already in the ${
					student.isPresent === true ? "Present List" : "Absent List"
				}`,
			);
		}

		dispatch({
			type: "change_isPresent_status_of_a_student",
			payload: { id: student.id, isPresent: true },
		});
	};

	const makeAbsentHandler = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`This student is already in the ${
					student.isPresent === true ? "Present List" : "Absent List"
				}`,
			);
		}

		dispatch({
			type: "change_isPresent_status_of_a_student",
			payload: { id: student.id, isPresent: false },
		});
	};

	const toggleList = (student) => {
		dispatch({
			type: "change_isPresent_status_of_a_student",
			payload: { id: student.id, isPresent: !student.isPresent },
		});
	};

	const ctxValue = {
		studentStates,
		dispatch,
		submitHandler,
		makePresentHandler,
		makeAbsentHandler,
		toggleList,
		changeNameHandler,
	};

	return (
		<StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>
	);
};

export default StudentProvider;
