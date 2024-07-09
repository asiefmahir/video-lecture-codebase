import { useState } from "react";
// import {
// 	useGetAllNotesQuery,
// 	useCreateNoteMutation,
// 	useRemoveNoteMutation,
// } from "../store/features/note";
import {
	useGetAllNotes,
	useCreateNote,
	useRemoveNote,
	useUpdateNote,
} from "../hooks/server-states/note";

const NoteTakingApp = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const { isFetching, isError, error, notes } = useGetAllNotes();

	const noteCreateMutation = useCreateNote();
	const noteRemoveMutation = useRemoveNote();
	const updateNoteMutation = useUpdateNote();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
			isCompleted: false,
		};

		// addNote(newNote);
		noteCreateMutation.mutate(newNote);
		setNoteTitle("");
	};

	const removeHandler = (noteId) => {
		// deleteNote(noteId);
		noteRemoveMutation.mutate(noteId);
	};

	const updateHandler = (note) => {
		const { id, ...rest } = note;
		const updatedNote = { ...rest, isCompleted: !note.isCompleted };
		updateNoteMutation.mutate({ noteId: id, updatedNote: updatedNote });
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
						<input
							type="checkbox"
							checked={note.isCompleted}
							onChange={() => updateHandler(note)}
						/>
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
