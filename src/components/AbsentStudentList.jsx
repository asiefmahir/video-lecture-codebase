import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AbsentStudentList = () => {
	const { studentStates, toggleList } = useContext(StudentCtx);
	return (
		<div className="list absent-students">
			<h2>Absent Students</h2>
			<ul>
				{studentStates.students
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
	);
};

export default AbsentStudentList;
