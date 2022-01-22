import React from 'react';
import { Link, } from 'react-router-dom';
import './CreateTask.css'

const CreateTask = () => {
    return (
        <div className='container task d-flex justify-content-center align-items-center'>
            <div className="task-area  text-center">
                <h3 className='pt-3 '>No Task Create Yet</h3>
                <Link to="/addingTask"><button className='btn-regular mb-3'>Create Task</button></Link>
            </div>
        </div>
    );
};

export default CreateTask;