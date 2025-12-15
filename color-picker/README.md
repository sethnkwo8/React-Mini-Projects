# 📌 React Color Picker
This is a simple React Color Picker application that allows users to preview colors in real time. Users can select a color using a native color input or manually enter a color value, and the preview updates instantly.

This project demonstrates:
- Controlled inputs in React
- Managing state with useState
- Dynamic inline styling
- Handling form submission
- Real-time UI updates

# 🗂 Features
- Live color preview panel
- Select color using the browser’s color picker
- Manually enter a color value (HEX/RGB)
- Updates preview instantly on change
- Simple and responsive layout styled with Tailwind CSS

# 🛠 Tech Stack
- React (with Vite)
- Tailwind CSS for styling
- Javascript ES6+
- HTML5 Color Input

# 📁 Project Structure
```
src/
│
├─ components/
│  └─ ColorPreview.jsx      
│
├─ App.jsx     
├─ main.jsx              
└─ output.css            
```

# ⚙️ How It Works

- The selected color is stored in component state
- The preview box updates its background color dynamically
- Users can:
- Pick a color using 
```
<input type="color">
```
- Type a color value and submit it via a form
- Both methods update the same state, keeping the UI in sync

# 📦 Installation

### **1. Clone the Repository:**
```bash
git clone https://github.com/sethnkwo8/React-Mini-Projects
cd color-picker
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

# 📕 Learning Outcomes
By building this project, I practiced:
- Using controlled form inputs
- Updating styles dynamically with state
- Handling multiple inputs with shared state
- Creating small, reusable React components
- Building interactive UI features without external libraries

# 🔮 Possible Improvements
- Validate color input values
- Show color codes (HEX / RGB) dynamically
- Add copy-to-clipboard functionality
- Save last selected color to localStorage
- Support multiple color previews

# 📄 License
MIT License &copy; Seth Nkwo