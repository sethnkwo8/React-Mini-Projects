export default function saveTask(taskName, taskDescription) {
    let tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

    if (taskName.trim() === '' || taskDescription.trim() === '') return null

    tasks.push({ id: Date.now(), name: taskName, description: taskDescription, completed: false });

    localStorage.setItem('savedTasks', JSON.stringify(tasks));

    return tasks
}