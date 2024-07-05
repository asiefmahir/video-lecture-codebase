import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const PresentStudentList = () => {
	const { students, toggleList } = useContext(StudentCtx);

	// Derived State
	const presentStudentList = students.filter(
		(item) => item.isPresent === true,
	);
	return (
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
	);
};

export default PresentStudentList;
