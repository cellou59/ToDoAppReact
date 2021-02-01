import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import AddTask from './components/AddTask'


export default class App extends Component {

  state = {
    tasks: [ {id: 0,name: "Tâche 1",complete: "" } ]


  }
  getDelete = (id) => {
    const tasks = this.state.tasks.slice()
    let index = tasks.findIndex(function (task) {
      return task.id === id
    })
    tasks.splice(index, 1)
    this.setState({
      tasks
    });
  }

  newTask = (newTask) => {
    const tasks = [...this.state.tasks]
    tasks.push(newTask)

    this.setState({
      tasks
    })
  }

  complete = (id) => {
    const tasks = this.state.tasks.slice()
    let index = tasks.findIndex(function (task) {
      return task.id === id
    })
    let task = tasks[index]
    task.complete = "completed"
    tasks[index] = task
    this.setState({
      tasks
    })
  }


  render() {

    const listTask = this.state.tasks.map((task) => {
      return (
        <Todo
          key={task.id}
          id={task.id}
          taskName={task.name}
          onDelete={() => this.getDelete(task.id)}
          complete={() => this.complete(task.id)}
          completed={task.complete}
        />
      )
    });

    return (
      <div>
        <header>
          <p><span>🧠</span></p>
          <h1>Taskinator</h1>
          <p><span>🤖</span></p>
        </header>
        <AddTask onNewTask={this.newTask}/>
        <div>
          <h2>Mes tâches</h2>
          {listTask}
        </div>
      </div>
    )
  }
}
