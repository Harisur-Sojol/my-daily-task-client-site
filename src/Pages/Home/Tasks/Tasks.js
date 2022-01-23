import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Tasks.css'

const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    // Get All Task
    useEffect(() => {
        fetch("https://stormy-beach-65788.herokuapp.com/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, [tasks]);

    // delete a Task
    const handleDeleteTask = id => {
        const proceed = window.confirm("Are you sure you want to delete your task???")
        if (proceed) {
            const url = `https://stormy-beach-65788.herokuapp.com/deleteTask/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully")
                        const remainingTask = tasks.filter(td => td._id !== id);
                        setTasks(remainingTask)
                    }
                })
        }
    }

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h2>My Task List:</h2>
                <Link to={"./addingTask"}><button className='create-btn align-self-end'>Create Task</button> </Link>
            </div>
            <div className="row g-4">
                {
                    tasks.map((task, index) =>
                        <div className='col-lg-4 col-md-6 col-sm-10'>
                            <div className="card shadow box">
                                <h3 className='task-number'>{index + 1}</h3>
                                <div className="task-info">
                                    <div className="card-body mt-5">
                                        <h3 className='mt-3'>{task.name}</h3>
                                        <p className='mt-3 '>{task.description}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <Link to={`/updateTask/${task._id}`}><Button className="update-btn" variant="">Update</Button></Link>
                                        <Button onClick={() => handleDeleteTask(task._id)} className="delete-btn" variant="">Delete</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Tasks;
