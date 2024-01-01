import React from 'react';

import Todo from './components/todo_component/Todo'

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return(
        <ul>
            {DUMMY_TODOS.map(todoItem => <Todo text={todoItem} />)}
        </ul>
    );
}
