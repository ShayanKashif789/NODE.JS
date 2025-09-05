# File Streaming with Node.js

This project demonstrates how to efficiently handle large files in Node.js using **streams**.  
Instead of loading the entire file into memory at once, the file is sent to the client in **small chunks**, ensuring optimized memory usage and better performance.

---

## 🚀 How It Works
- A simple HTTP server is created using Node.js.
- When the user visits `/file`, the server streams the contents of `heavyFile.txt` (a 10 MB file) to the client.
- The file is read and transferred in **chunks**, preventing the server from consuming excessive memory.
- If the file does not exist, a `404` response is returned.
- Any server or stream error results in a `500` error message.

---

---

## 🧠 Why Use Streams?
Without streams:
- The entire file is loaded into memory at once.
- For large files, this can cause performance issues or even crash the server due to memory overload.

With streams:
- Data is processed and sent in **chunks**.
- Memory usage is minimized.
- Server can handle large files efficiently without crashing.

---
