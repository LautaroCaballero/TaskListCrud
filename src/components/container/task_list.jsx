import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../forms/taskForm';


const TaskListComponent = () => {
    const defaultTask = new Task('Example 1', 'Default description 1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Default description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Default description 3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('TaskList componment is going to unmount...')
        }
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this task: ', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log('delete this task: ', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; 
        tempTasks.splice(index,1);
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log('add this task: ', task)
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    } 
    
    const Table = () => {
        return (
            <table>
                    <thead>
                        <tr>
                            <th scope='col'>Tittle</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task, index) => {
                            return(
                                <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}
                                >
                                    
                                </TaskComponent>
                            )
                        }) }
                    </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else {
        tasksTable = (
        <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {loading ? (<p style={loadingStyle}>Loading..</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} lenght={tasks.length}/>               
        </div>
    );
};


export default TaskListComponent;
