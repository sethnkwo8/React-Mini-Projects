# 🙎🏿‍♂️ Random User App
A simple React application that fetches random user data from the Random User API￼and displays it with a user card. Includes a loading spinner and a button to fetch a new user.

# 🗂 Features
- Fetch random user data (name, email, profile picture)
- Display user details in a card
- Loading spinner while fetching
- Error handling if the API request fails
- Button to fetch a new user

# 🛠 Tech Stack
- React (with Vite)
- Tailwind CSS for styling
- Javascript ES6+
- **Random User API** for data

# 📁 Project Structure
```
src/
│
├─ components/
│  ├─ UserCard.jsx       # Displays user profile info
│  ├─ FetchButton.jsx    # Button to fetch a new user
│  ├─ LoadingSpinner.jsx # Shows spinner while loading
│
├─ hooks/
│  └─ useFetch.js        # Custom hook to fetch data
│
├─ App.jsx               # Main app component
├─ main.jsx              # Entry point that renders App
└─ output.css            # Tailwind CSS compiled output
```

# 📦 Installation

### **1. Clone the Repository:**
```bash
git clone https://github.com/sethnkwo8/React-Mini-Projects
cd random-user
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

# 👨🏿‍💻 Usage 
- Open the app in your browser.
- A random user will automatically be displayed.
- Click “Get New User” to fetch another random user.
- While the data is loading, a spinner is shown.

# ⛓ Custom Hook (useFetch)
The app uses a custom hook useFetch for API requests:
```js
const { data, loading, error, refetch } = useFetch('https://randomuser.me/api/');
```

- data → API response
- loading → Boolean while fetching
- error → API error (if any)
- refetch → Function to manually fetch new data

# 📄 License
MIT License &copy; Seth Nkwo