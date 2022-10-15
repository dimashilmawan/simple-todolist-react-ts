import React, { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodos(prevTodos => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (todoId: string): void => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== todoId);
		});
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos onRemoveTodo={removeTodoHandler} items={todos} />
		</div>
	);
};

export default App;
