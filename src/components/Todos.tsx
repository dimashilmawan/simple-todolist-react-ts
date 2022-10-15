import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";

const Todos: React.FC<{
	items: Todo[];
	onRemoveTodo: (todoId: string) => void;
}> = props => {
	return (
		<ul className={classes.todos}>
			{props.items.map(item => {
				return (
					<TodoList
						key={item.id}
						id={item.id}
						text={item.text}
						onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
					/>
				);
			})}
		</ul>
	);
};

export default Todos;
