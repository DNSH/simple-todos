import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

//App component represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map(
      (task) => (<Task key={task._id} task={task} />)
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>ToDo List</h1>
        </header>

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks"
          />
        </form>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
