import { useState } from "react";
import "./App.css";

function App() {
	// Re-Render
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([
		{ id: 1, title: "Note 1" },
		{ id: 2, title: "Note 2" },
	]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	const changeTitleHandler = (e) => {
		setNoteTitle(e.target.value);
		// noteTitle = e.target.value
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (noteTitle.trim() === "") {
			return alert(`Please provide a valid title`);
		}

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		setNotes([...notes, newNote]);
		setNoteTitle("");

		// notes = [newNote, ...notes]
	};

	const removeHandler = (noteId) => {
		// 2
		const updatedNotes = notes.filter((item) => item.id !== noteId);
		//                   notes.filter(({ id: 1, title: "Note 1" }) => 1 !== 2)
		//                              (({ id: 2, title: "Note 2" }) =>  2 !== 2))

		setNotes(updatedNotes);

		// notes = updatedNotes
	};

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={changeTitleHandler}
				/>
				<button type="submit">Add Note</button>
			</form>
			<div className="note-list">
				<h2>All Notes</h2>
				<ul>
					{notes.map((note) => (
						<>
							<li key={note.id}>
								<span>{note.title}</span>
								<button>Edit</button>
								<button onClick={() => removeHandler(note.id)}>
									Delete
								</button>
							</li>
							<br />
						</>
					))}
				</ul>
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
