import React, { useEffect, useState } from 'react';
import './AddingTask.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const AddingTask = () => {

    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();

    const [error, setError] = useState("");
    const [disable, setDisable] = useState(true);
    const [data, setData] = useState([]);


    const onSubmit = data => {
    alert("Created successfully")
    fetch("https://stormy-beach-65788.herokuapp.com/addingTask",{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    reset()
    history.push("/myTaskList")
    
    };

    const textAreaHandler = (e) => {
        if (e.target.value.length < 50) {
            setError("please write at least 50 character")
            setDisable(true)
        }
        else {
            setError("")
            setDisable(false)
        }
    }

    return (
        <div className="container task d-flex justify-content-center align-items-center">
            <div className="add-task">
                <h2 className="text-center py-4">Create Your Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Task Name" className='name-input' />

                    <textarea  {...register("description", { required: true, min: 50 })} placeholder="Task Description" cols={3} rows={5} onChange={textAreaHandler} className='p-2'/>
                    <p className='text-danger'>{error}</p>

                    <button className='submit-btn mb-3' type='submit' disabled={disable ? true : false}>Create</button>
                </form>
            </div>
        </div>
    );
};

export default AddingTask;