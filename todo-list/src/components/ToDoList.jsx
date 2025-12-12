import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

export default function ToDoList() {

    const [showForm, setShowForm] = useState(false);
    const [checked, setChecked] = useState(false);

    // Re render component
    const [refresh, setRefresh] = useState(false);

    const tasks = JSON.parse(localStorage.getItem('savedTasks'));
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.completed).length;

    if (showForm) {
        return (
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <ToDoInput setShowForm={setShowForm} />
            </div>
        )
    }



    return (
        <div className="mt-12 w-full md:w-3/4 p-8 flex flex-col items-center space-y-4 rounded-lg shadow-lg">
            <div className="w-full">
                <button className="py-4 px-8 text-white bg-blue-400 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg" onClick={() => setShowForm(true)}>Add Task</button>
            </div>
            <h1 className="font-bold text-3xl">My Tasks</h1>
            <p>Tasks Completed: {completedTasks} / {totalTasks}</p>
            <ToDoItem tasks={tasks} refresh={() => setRefresh(prev => !prev)} />
        </div>
    );
}