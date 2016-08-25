import React from 'react';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos } = this.props;
    
    const todoTitles = todos.map((todo) => <li> {todo.title} </li>);
    return (
      <div>
        <ul>
          {todoTitles}
        </ul>
      </div>
    );
  }
}

export default TodoList;
