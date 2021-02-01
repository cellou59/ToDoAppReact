import React, { Component ,Fragment } from 'react'


class AddTask extends Component {
    state = {
        addNewTask : ""
    }
    
    addValue = (e) => {
    const addNewTask= e.target.value    
        
    this.setState({
        addNewTask
    }); 
    }

    SetNewtask = () => {
        
        if (this.state.addNewTask !== "") {
            
            let id = Math.random()*1000000000
            id = Math.trunc(id)
            const name = this.state.addNewTask
            let complete = ""
            const newTask = {id, name, complete}
            console.log(newTask)
            
            this.props.onNewTask(newTask);
            this.setState({
                addNewTask :""
            })
        }
    }
    
    render() {
        return (
            <Fragment>
            <input onChange={(e) => this.addValue(e)} type="text" />
            <button onClick={() => this.SetNewtask()} >Ajouter une tâche</button>
            </Fragment>
        )             
    }
}

export default AddTask;