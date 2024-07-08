import { useState, useContext } from "react";
import { BoardContext } from "../contexts/Board";

const BoardCreatingForm = () => {
	const [boardTitle, setBoardTitle] = useState("");

	const { dispatchBoardActions } = useContext(BoardContext);

	const submitHandler = (e) => {
		e.preventDefault();
		if (boardTitle.trim() === "") {
			return alert(`Please provide a valid title`);
		}
		dispatchBoardActions({ type: "CREATE_BOARD", payload: boardTitle });
		setBoardTitle("");
	};
	return (
		<div className="align-center m-top-md">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={boardTitle}
					onChange={(e) => setBoardTitle(e.target.value)}
				/>
				<button type="submit">Create Board</button>
			</form>
		</div>
	);
};

export default BoardCreatingForm;
