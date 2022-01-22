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

                    <button className='submit-btn mb-3' type='submit' disabled={disable ? true : false}>Create</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;




// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// const UpdateTask = () => {


//     const [user, setUser] = useState({})
//     const { id } = useParams();

//     useEffect(() => {
//         const url = `http://localhost:5000/singleTask/${id}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setUser(data))
//     }, [])


//     //udpate user
//     const handleNameChange = e => {
//         const updatedName = e.target.value;
//         const updateUser = { name: updatedName, email: user.email }
//         setUser(updateUser)
//     }

//     // update email
//     const handleEmailChange = e => {
//         const updatedEmail = e.target.value;
//         // const updatedUser = {...user}
//         // updatedUser.email = updatedEmail
//         const updatedUser = { name: user.name, email: updatedEmail }
//         setUser(updatedUser)
//     }


//     const handleUpdateUser = e => {
//         const url = `http://localhost:5000/users/${id}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount > 0) {
//                     alert('Updated successfully,.')
//                     setUser({})
//                 }
//             })
//         e.preventDefault()
//     }


//     return (
//         <div>
//             <div>
//                 <h2> Update Your Task</h2>
//                 <p><small>{id}</small></p>
//                 <form onSubmit={handleUpdateUser}>
//                     <input type="text" onChange={handleNameChange} value={user.name || ''} />
//                     <input type="email" onChange={handleEmailChange} value={user.email || ''} placeholder='email' />
//                     <input type="submit" value="Update" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateTask;