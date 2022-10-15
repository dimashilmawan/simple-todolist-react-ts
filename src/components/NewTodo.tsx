import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) return;
		props.onAddTodo(enteredText);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">New Todo</label>
			<input id="text" placeholder="type todo" ref={todoTextInputRef} />
			<button>Add</button>
		</form>
	);
};

export default NewTodo;
