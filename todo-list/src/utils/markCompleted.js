export default function markCompleted(e) {
    const id = Number(e.target.dataset.id);
    const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

    const updated = tasks.map(task => task.id === id ? { ...task, completed: e.target.checked } : task)
    localStorage.setItem('savedTasks', JSON.stringify(updated));
}