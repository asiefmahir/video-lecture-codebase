import { useState } from "react";
import {
	useGetAllNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} from "../store/features/note";

const NoteTakingApp = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const { isFetching, isError, error, data: notes } = useGetAllNotesQuery();

	const [addNote] = useCreateNoteMutation();
	const [deleteNote] = useRemoveNoteMutation();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		addNote(newNote);
	};

	const removeHandler = (noteId) => {
		deleteNote(noteId);
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
				<button type="submit">Create Note</button>
			</form>
			<ul>
				{notes?.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button onClick={() => removeHandler(note.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoteTakingApp;
