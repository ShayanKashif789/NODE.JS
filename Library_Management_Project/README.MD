# Book Management API (Node.js)

## 📖 Description  
This is a simple **Book Management API** built using Node.js without any external frameworks like Express.  
It provides endpoints to view all books and search for books by title.  
The data is stored in a `books.json` file, making it lightweight and easy to use for learning purposes.

---

## ✨ Features  
- 📚 Fetch all books (`/books`)  
- 🔍 Search books by title (`/search?title=bookname`)  
- 🗂 Data persistence using `books.json`  
- ⚡ Built with **pure Node.js HTTP module** (no external frameworks)  

---

## Technologies Used
- **Node.js** – JavaScript runtime environment
- **readline (Node.js built-in module)** – For handling user input in the command line
- **fs (File System module)** – For reading/writing JSON files
- **path (Path module)** – For handling file paths
- **http (Node.js built-in module)** – For running the server
