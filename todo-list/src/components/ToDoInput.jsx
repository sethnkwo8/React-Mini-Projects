import { useState } from "react";
import saveTask from "../utils/saveTasks";

export default function ToDoInput({ setShowForm }) {

    const [task, setTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTask(task, taskDescription);

        setTask('');
        setTaskDescription('');
        removeForm();

    }

    function removeForm() {
        setShowForm(false);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <form className="w-full md:w-1/2 flex flex-col space-y-8 items-center p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <div className="w-full">
                    <a className="text-blue-500 hover:underline text-lg" onClick={removeForm}>Back</a>
                </div>
                <h1 className="text-3xl font-bold mb-6">Add New Task</h1>
                <div className="w-full flex flex-col">
                    <label className="text-lg" htmlFor="taskInput">Task</label>
                    <input className="w-full rounded-lg p-2 border border-black outline-0" id="taskInput" onChange={(e) => setTask(e.target.value)} type="text" value={task} />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-lg" htmlFor="taskDescription">Description</label>
                    <textarea className="w-full rounded-lg p-4 border border-black outline-0" id="taskDescription" onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription}></textarea>
                </div>
                <button className="bg-blue-400 hover:bg-blue-600 hover:scale-105 rounded-lg text-white transition-all duration-300 ease-in-out py-4 px-8">
                    Add Task</button>
            </form>
        </div>
    );
}