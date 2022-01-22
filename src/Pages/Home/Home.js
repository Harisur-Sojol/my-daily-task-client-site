import React from 'react';
import AddingTask from './AddingTask/AddingTask';
import CreateTask from './CreateTask/CreateTask';
import Tasks from './Tasks/Tasks';

const Home = () => {
    return (
        <div>
            <CreateTask></CreateTask>
            {/* <AddingTask></AddingTask>
            <Tasks></Tasks> */}     
        </div>
    );
};

export default Home;