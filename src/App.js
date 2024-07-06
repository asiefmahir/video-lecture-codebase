import { useState, useEffect } from "react";
import "./App.css";

function App() {
	// Re-Render
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	const getAllNotes = () => {
		fetch(`http://localhost:4000/notes`)
			.then((res) => res.json())
			.then((data) => setNotes(data));
	};

	useEffect(() => {
		getAllNotes();
	}, []);

	const changeTitleHandler = (e) => {
		setNoteTitle(e.target.value);
		// noteTitle = e.target.value
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (noteTitle.trim() === "") {
			return alert(`Please provide a valid title`);
		}

		editMode ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		fetch(`http://localhost:4000/notes`, {
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			// refetching
			getAllNotes();
		});

		// setNotes([...notes, newNote]);
		setNoteTitle("");

		// notes = [newNote, ...notes]
	};

	const removeHandler = (noteId) => {
		fetch(`http://localhost:4000/notes/${noteId}`, {
			method: "DELETE",
		}).then(() => {
			getAllNotes();
		});

		// notes = updatedNotes
	};

	const editHandler = (note) => {
		setEditMode(true);
		setEditableNote(note);
		setNoteTitle(note.title);
	};

	const updateHandler = () => {
		const { id, ...rest } = editableNote;
		const updatedNote = { ...rest, title: noteTitle };
		fetch(`http://localhost:4000/notes/${editableNote.id}`, {
			method: "PUT",
			body: JSON.stringify(updatedNote),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			getAllNotes();
			setEditMode(false);
			setNoteTitle("");
		});

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
				<button type="submit">
					{editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
			<div className="note-list">
				<h2>All Notes</h2>
				<ul>
					{notes.map((note) => (
						<>
							<li key={note.id}>
								<span>{note.title}</span>
								<button onClick={() => editHandler(note)}>
									Edit
								</button>
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
