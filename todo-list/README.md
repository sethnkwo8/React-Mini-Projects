# 📌 React To-Do App
A simple and clean To-Do application built with React.
Tasks are saved in localStorage, so they remain even after refreshing or closing the browser.

# 🗂 Features
- ✔️ Add new tasks
- ✔️ Delete existing tasks
- ✔️ Mark tasks as completed
- ✔️ Completed tasks remain checked after page reload
- ✔️ Task data is stored in localStorage
- ✔️ Responsive UI (works on mobile and desktop)

# 🛠 Tech Stack
- React (with Vite)
- Tailwind CSS for styling
- Javascript ES6+
- localStorage for persistent data

# 📁 Project Structure
```
src/
│
├─ components/
│  ├─ ToDoInput.jsx      
│  ├─ ToDoItem.jsx   
│  ├─ ToDoList.jsx 
│
├─ utils/
│  └─ deleteTasks.js        
│  └─ markCompleted.js        
│  └─ saveTasks.js        
│
├─ App.jsx     
├─ main.jsx              
└─ output.css            
```

# 💾 How Tasks Are Saved

Tasks are stored in localStorage under:
```code
savedTasks
```

A task object looks like:
```json
{
  "id": 1725000000000,
  "name": "Task title",
  "description": "Task description",
  "completed": false
}
```

# 🔄 How Tasks Stay Checked After Reload
- Every time a checkbox is clicked, the task’s completed field is updated.
- The entire updated array is stored again in localStorage.
- On page load, tasks are loaded from storage into React state.

# 📦 Installation

### **1. Clone the Repository:**
```bash
git clone https://github.com/sethnkwo8/React-Mini-Projects
cd todo-list
```

### **2. Install the dependencies:**
```bash
npm install
```

### **3. Install Tailwind CSS if not installed:**
```bash
npm install -D tailwindcss @tailwindcss/cli
```

### **4. Build your Tailwind CSS:**
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### **5. Start the development server:**
```bash
npm run dev
```

# 🧩 How to Add a Task
Inside ToDoInput:
- User fills in task name + description
- When submitted, it calls saveTask()
- After saving, the app rerenders and displays the updated list

# 🗑️ How to Delete a Task
Clicking the delete button runs:
```js
deleteTasks(id)
```
This removes the item from localStorage and triggers a refresh.

# ✔️ Marking Tasks Completed
Each task includes:
```jsx
<input
  type="checkbox"
  checked={task.completed}
  onChange={() => toggleCompleted(task.id)}
/>
```
toggleCompleted updates localStorage and state.

# 🌟 Future Improvements
- Edit tasks
- Sort tasks (completed → bottom)
- Add categories
- Dark mode

# 📄 License
MIT License &copy; Seth Nkwo