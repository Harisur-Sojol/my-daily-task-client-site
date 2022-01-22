import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const UpdateTask = () => {

    const history = useHistory()
    const { id } = useParams();

    const { register, handleSubmit, reset } = useForm();

    const [error, setError] = useState("");
    const [disable, setDisable] = useState(true);


    // Handle form
    const onSubmit = data => {
        alert("Updated successfully")
        const url = `http://localhost:5000/singleTask/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        reset()
        history.push("/myTaskList")

    };


    // Validation
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
                <h2 className="text-center py-4">Update Your Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Task Name" className='name-input' />

                    <textarea  {...register("description", { required: true, min: 50 })} placeholder="Task Description" cols={3} rows={5} onChange={textAreaHandler} className='p-2' />
                    <p className='text-danger'>{error}</p>

                    <button className='submit-btn mb-3' type='submit' disabled={disable ? true : false}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;
