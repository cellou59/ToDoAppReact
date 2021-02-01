import React, {Fragment} from 'react';


const Todo = ({taskName, onDelete, complete, completed}) => {
    
    
    
    return(

        <Fragment>

        <div>
            <input onChange={complete} type="radio" />
            <p className={completed}>{taskName}</p>
            <button onClick={onDelete}>Supprimer une Tâche</button>
        </div>
    </Fragment>
    )
}

export default Todo;