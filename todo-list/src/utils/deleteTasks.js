export default function deleteTasks(e) {
    const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

    if (e.target.matches('.deleteBtn')) {
        const id = Number(e.target.dataset.id);
        const updated = tasks.filter(task => task.id !== id);

        localStorage.setItem('savedTasks', JSON.stringify(updated));
    }


}