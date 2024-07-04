import { useState } from "react";
import "./App.css";

function App() {
	// Re-Render
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	// Derived State
	const presentStudentList = students.filter(
		(item) => item.isPresent === true,
	);

	const submitHandler = (e) => {
		e.preventDefault();
		if (studentName.trim() === "") {
			return alert(`Please Provide a valid name`);
		}

		editMode ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};
	const editHandler = (student) => {
		setEditMode(true);
		setEditableStudent(student);
		setStudentName(student.name);
	};
	const updateHandler = () => {
		const updatedStudentList = students.map((item) => {
			if (item.id === editableStudent.id) {
				return { ...item, name: studentName };
			}
			return item;
		});

		setStudents(updatedStudentList);
		setEditMode(false);
		setEditableStudent(null);
		setStudentName("");
	};
	const removeHandler = (studentId) => {
		const updatedStudentList = students.filter(
			(student) => student.id !== studentId,
		);

		setStudents(updatedStudentList);
	};

	const changeNameHandler = (e) => {
		setStudentName(e.target.value);
	};

	const makePresentHandler = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`This student is already in the ${
					student.isPresent === true ? "Present List" : "Absent List"
				}`,
			);
		}

		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: true };
			}

			return item;
		});

		setStudents(updatedStudentList);
	};

	const makeAbsentHandler = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`This student is already in the ${
					student.isPresent === true ? "Present List" : "Absent List"
				}`,
			);
		}

		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: false };
			}

			return item;
		});

		setStudents(updatedStudentList);
	};

	const toggleList = (student) => {
		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: !item.isPresent };
			}

			return item;
		});

		setStudents(updatedStudentList);
	};

	return (
		<div className="App">
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
			<div className="student-section">
				<div className="list all-students">
					<h2>All Students</h2>
					<ul>
						{students.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => editHandler(student)}>
									Edit
								</button>
								<button
									onClick={() => removeHandler(student.id)}
								>
									Delete
								</button>
								<button
									onClick={() => makePresentHandler(student)}
								>
									Make Present
								</button>
								<button
									onClick={() => makeAbsentHandler(student)}
								>
									Make Absent
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list present-students">
					<h2>Present Students</h2>
					<ul>
						{presentStudentList.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => toggleList(student)}>
									Accidentally Added
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list absent-students">
					<h2>Absent Students</h2>
					<ul>
						{students
							.filter((item) => item.isPresent === false)
							.map((student) => (
								<li key={student.id}>
									<span>{student.name}</span>
									<button onClick={() => toggleList(student)}>
										Accidentally Added
									</button>
								</li>
							))}
					</ul>
				</div>
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
