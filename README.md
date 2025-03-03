# 📝 Notes API (MERN Backend)

A simple **RESTful API** built with **Node.js, Express, and MongoDB** for managing notes. 
This API allows users to **Create, Read, Update, and Delete (CRUD)** notes efficiently. 🚀

---

## 📌 Features

✅ Create a new note  
✅ Retrieve all notes  
✅ Retrieve a single note by ID  
✅ Update a note  
✅ Delete a note  
✅ Uses **MongoDB & Mongoose** for database management  
✅ Handles errors gracefully  
✅ Supports **CORS** for frontend integration  
✅ Clean and scalable project structure  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/notes-api.git
cd notes-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up MongoDB
You can either **run MongoDB locally** or use **MongoDB Atlas (Cloud)**.
- **Local MongoDB:** Ensure MongoDB is running on your machine.
- **MongoDB Atlas:** Get your connection URI from Atlas.

### 4️⃣ Create a `.env` File
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb://localhost:27017/notesDB
PORT=5000
```

### 5️⃣ Run the Server
For development (with auto-restart):
```sh
npm run dev
```
For production:
```sh
npm start
```

---

## 📡 API Endpoints

### **1️⃣ Create a Note**
📌 **POST** `/api/notes`
#### Request Body (JSON)
```json
{
  "title": "My First Note",
  "content": "This is a test note."
}
```
#### Response
```json
{
  "_id": "65f2a5d2b7890c0012345678",
  "title": "My First Note",
  "content": "This is a test note.",
  "createdAt": "2025-03-03T12:00:00.000Z",
  "updatedAt": "2025-03-03T12:00:00.000Z"
}
```

### **2️⃣ Get All Notes**
📌 **GET** `/api/notes`
#### Response
```json
[
  {
    "_id": "65f2a5d2b7890c0012345678",
    "title": "My First Note",
    "content": "This is a test note."
  }
]
```

### **3️⃣ Get a Single Note**
📌 **GET** `/api/notes/:id`

### **4️⃣ Update a Note**
📌 **PUT** `/api/notes/:id`
#### Request Body (JSON)
```json
{
  "title": "Updated Note Title",
  "content": "Updated content."
}
```

### **5️⃣ Delete a Note**
📌 **DELETE** `/api/notes/:id`
#### Response
```json
{
  "message": "Note deleted successfully"
}
```

---

## 🛠 Built With

- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL Database
- **Mongoose** - MongoDB Object Data Modeling (ODM)
- **dotenv** - Manage environment variables
- **cors** - Enable cross-origin resource sharing
- **nodemon** - Auto-restart server during development

---

## 🎯 Future Enhancements

🔹 Add **user authentication** with JWT  
🔹 Implement **pagination** for large datasets  
🔹 Add **frontend (React.js) integration**  
🔹 Deploy API to **Render, Vercel, or Railway**  

---

## 🏆 Contributing

Contributions are welcome! Feel free to **fork** the repository, make changes, and submit a **pull request**. 😊

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Added a new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📬 Contact

📧 Email: arjund030@gmail.com  
🔗 GitHub: himanshudubey7(https://github.com/himanshudubey7)  

---

⭐ **If you like this project, don't forget to give it a star on GitHub!** ⭐

