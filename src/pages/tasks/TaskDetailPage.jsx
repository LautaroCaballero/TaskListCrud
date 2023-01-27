import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({tasks}) => {

    const {id} = useParams();

    let tareas = tasks.map(task => {

    })

    return (
        <div>
            {/* <h1>Task Detail - {id}</h1>
            <h2>{task.name}</h2>
            <h2>{task.description}</h2> */}
        </div>
    );
}

export default TaskDetailPage;
