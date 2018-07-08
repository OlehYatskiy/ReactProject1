import React from 'react';

import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {// Component listen smth store before updating
    TodoStore.on('change', this.getTodos);
    console.log('count', TodoStore.listenerCount('change'));
  }

  componentWillUnmount() {// To prevent memory leaks
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
        <div>
          <h2 className='my-4'>Todos</h2>
          <button onClick={this.createTodo.bind(this)}>CreateTodo</button>
          <button onClick={this.reloadTodos.bind(this)}>ReloadAsinc</button>
          <div className='row'>
            <ul>{TodoComponents}</ul>
          </div>
        </div>
    );
  }
}
