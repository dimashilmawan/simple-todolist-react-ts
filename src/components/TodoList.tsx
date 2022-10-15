import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{
	text: string;
	id: string;
	onRemoveTodo: () => void;
}> = props => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

export default TodoList;
