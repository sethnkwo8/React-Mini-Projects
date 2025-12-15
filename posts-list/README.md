# 📌 React Posts List
This is a small React component-based project that fetches posts from the JSONPlaceholder API￼ and displays them in a paginated list. It demonstrates:
- Fetching data with a custom hook (useFetchPosts)
- Handling loading and error states
- Rendering dynamic lists with .map()
- Implementing pagination with Next and Previous buttons
- Styling with Tailwind CSS

# 🗂 Features
- Fetches posts from https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
- Displays each post in a card layout (PostItem)
- Handles loading state with a spinner (LoadingSpinner)
- Handles error state with a message
- Pagination allows users to navigate pages of posts

# 🛠 Tech Stack
- React (with Vite)
- Tailwind CSS for styling
- Javascript ES6+
- Fetch from API

# 📁 Project Structure
```
src/
│
├─ components/
│  ├─ LoadingSpinner.jsx      
│  ├─ PageButtons.jsx   
│  ├─ PostItem.jsx 
│  ├─ PostList.jsx 
│
├─ hooks/
│  └─ useFetchPosts.js               
│
├─ App.jsx     
├─ main.jsx              
└─ output.css            
```

# 📦 Components

### **1. PostList**
- Fetches posts using useFetchPosts
- Maps through data and renders PostItem for each post
- Displays LoadingSpinner while fetching
- Passes pagination functions to PageButtons

### **2. PostItem**
- Displays individual post title and body
- Styled with Tailwind CSS

### **3. PageButtons**
- Provides Next and Previous buttons
- Updates current page via props

### **4. useFetchPosts (custom hook)**
- Handles fetching data, loading, and error states
- Returns { data, loading, error }

# 📦 Installation

### **1. Clone the Repository:**
```bash
git clone https://github.com/sethnkwo8/React-Mini-Projects
cd posts-list
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

### **6. Start the development server:**
Open your browser at https://localhost:5173

# 👨🏿‍💻 Usage
•	Navigate through pages using Next/Previous buttons
•	View posts in styled cards
•	Handles loading and error gracefully

# 📄 License
MIT License &copy; Seth Nkwo