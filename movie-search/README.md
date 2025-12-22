# 🎬 Movie Search App
A simple and responsive movie search application built with React that allows users to search for movies, TV shows, and people using The Movie Database (TMDB) API. The app supports pagination, loading states, and error handling.

# 🗂 Features
- Search for movies, TV shows, and actors
- Displays posters, titles, and release dates
- Pagination support (next & previous pages)
- Loading spinner while fetching data
- Graceful error handling
- Clean and responsive UI

# 🛠 Tech Stack
- React (with Vite)
- Tailwind CSS for styling
- Javascript ES6+
- TMDB API
- Custom React Hooks

# 📁 Project Structure
```
src/
│
├─ components/
│  ├─ SearchBar.jsx      
│  ├─ MovieList.jsx   
│  ├─ MovieItem.jsx 
│  ├─ Pagination.jsx 
│  ├─ LoadingSpinner.jsx 
│
├─ hooks/
│  └─ useFetchMovies.js
│               
├─ pages/
│  └─ MovieSearch.jsx
│               
├─ utils/
│  └─ onSubmit.js               
│
├─ App.jsx     
├─ main.jsx              
└─ output.css            
```

# ⚙️ How It Works

- The user types a search term into the search bar.
- On form submission, a request is made to the TMDB search endpoint.
- Results are fetched using a custom hook (useFetchMovies).
- Movies are rendered dynamically using reusable components.
- Pagination allows navigation through result pages.
- Search only runs when the user submits the form (not on every keystroke).

# 🔑 Environment Setup

1.	Create a free account on The Movie Database (TMDB)
2.	Get your API key
3.	Add the API key directly in the project (or via environment variables)

Example API usage: 
```code
https://api.themoviedb.org/3/search/multi
```

# 📦 Installation

### **1. Clone the Repository:**
```bash
git clone https://github.com/sethnkwo8/React-Mini-Projects
cd movie-search
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

# 📌 What This Project Demonstrates
- Controlled inputs and form handling
- Custom React hooks for data fetching
- API integration and pagination
- State management with useState
- Conditional rendering (loading & error states)
- Component reusability and separation of concerns

# 🔮 Possible Improvements
- Add debounce to search input
- Add movie detail page
- Improve accessibility
- Add caching for previous searches
- Add TypeScript support

# 📄 License
This project is for learning and portfolio purposes