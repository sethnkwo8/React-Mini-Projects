import deleteTasks from "../utils/deleteTasks"
import markCompleted from "../utils/markCompleted";

export default function ToDoItem({ tasks, refresh }) {
    const final = tasks.map(task =>
        <div className="task-card" key={task.id}>
            <div>
                <input data-id={task.id} checked={task.completed} onChange={(e) => { markCompleted(e); refresh() }} type="checkbox" />
            </div>
            <div>
                <p className='font-bold text-2xl'>{task.name}</p>
                <p className='text-base'>{task.description}</p>
            </div>
            <div>
                <button className='deleteBtn' data-id={task.id} onClick={(e) => { deleteTasks(e); refresh() }}>Delete</button>
            </div>
        </div>
    )

    return (
        <div className="w-full">
            {final}
        </div>
    );


}