import React from 'react';

class TodoListItem extends React.Component{

  render() {
    const { todo } = this.props;
    const { title, done } = todo;

    return(
      <div>
        <ul>
          <li> {this.props.todo.title} </li>
        </ul>
      </div>
    );
  }

}

export default TodoListItem;
