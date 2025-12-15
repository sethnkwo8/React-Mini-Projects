# React Mini Projects (With TailwindCSS)
A collection of small React projects built to practice core concepts such as components, hooks, props, state management, conditional rendering, lists, API fetching, and more.

Each project is built independently using Vite + React.

# 📁 Project Structure
```
React-Mini-Projects/
│
│── .gitignore                
│── README.md             # Project documentation
│
│── random-user/      
│   └── README.md
│   └── package.json
│   └── public/
│   └── src/
│       └── components/
│       └── input.css
│       └── output.css
│       └── hooks/
│       └── App.jsx
│       └── index.jsx
│
│── posts-list/
│   └── README.md      
│   └── package.json
│   └── public/
│   └── src/
│       └── components/
│       └── input.css
│       └── output.css
│       └── hooks/
│       └── App.jsx
│       └── index.jsx
│
│── color-picker/
│   └── README.md      
│   └── package.json
│   └── public/
│   └── src/
│       └── components/
│       └── input.css
│       └── output.css
│       └── hooks/
│       └── App.jsx
│       └── index.jsx
│
│── todo-list/
│   └── README.md
│   └── package.json
│   └── public/
│   └── src/
│       └── components/
│       └── input.css
│       └── output.css
│       └── hooks/
│       └── App.jsx
│       └── index.jsx
│
│──movie-search/
│   └── README.md      
│   └── package.json
│   └── public/
│   └── src/
│       └── components/
│       └── input.css
│       └── output.css
│       └── hooks/
│       └── App.jsx
│       └── index.jsx
```

# 🛠 Tech Stack
- React (Hooks)
- TailwindCSS
- JavaScript(ES6+)
- Vite (build tool)
- Fetch API

# 📚 Projects Included

### **1. Random User**

 - ✔️ Fetch user from RandomUser API
 - ✔️ Show name, email, picture
 - ✔️ “Generate New User” button
 - ✔️ Loading spinner

---

### **2. Posts List**
 - ✔️ Fetch list of posts
 - ✔️ Display the first 10 posts
 - ✔️ Click post -> show more details


---

### **3. Color Picker**
 - ✔️ Buttons to change color (Red, Blue, Green)
 - ✔️ Component for display, component for buttons
 - ✔️ Uses parent -> child communication

---

### **4. Todo List**
 - ✔️ Add todo 
 - ✔️ Delete todo
 - ✔️ Mark as completed
 - ✔️ Show count of completed

---

### **5. Movie Search App**
 - ✔️ Uses Fetch API
 - ✔️ Async/Await
 - ✔️ Event Loop
 - ✔️ Search movies using TMDb API
 - ✔️ Clean Tailwind UI

---

# 🚀 How to Run a Project

### **1. Clone the Repository**
```code
cd project-folder
npm install
npm run dev
```

# 📦 Build TailwindCSS (If Needed)

If you want to rebuild output.css:
```sh
npx tailwindcss -i ./input.css -o ./output.css --watch
```

# 📌 Goal

This repository is part of my journey to master React fundamentals before moving into:

- React Router
- Custom Hooks
- Context API
- Next.js
- Backend integration with Django REST / Node.js

# 📄 License

MIT License - free to use and modify.