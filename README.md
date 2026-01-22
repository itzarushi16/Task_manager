"# Task_manager" 
Here you go.
This is **ONE single clean README.md**, ready to **copy–paste as-is**. No edits needed. 📄✨

---

```md
# 📝 Task Manager – Full Stack Application

A simple and efficient **Task Manager** application built using **Spring Boot (Backend)** and **React (Frontend)**.  
The application allows users to add, view, and delete tasks using RESTful APIs with real-time UI updates.

---

## 🚀 Features

- ➕ Add new tasks  
- 📋 View all tasks  
- ❌ Delete tasks  
- 🔄 Real-time UI updates  
- 🌐 REST API integration  
- 🧩 Clean separation of frontend and backend  

---

## 🛠️ Tech Stack

### Frontend
- React  
- JavaScript  
- Axios  
- HTML, CSS  
- React Hooks (`useState`, `useEffect`)  

### Backend
- Spring Boot  
- Spring Web (REST APIs)  
- Spring Data JPA  
- H2 / MySQL (configurable)  
- Maven  

---

## 📁 Project Structure

```

Task_manager/
│
├── backend/              # Spring Boot Application
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── application.properties
│
├── frontend/             # React Application
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md

````

---

## 🔗 API Endpoints

| Method  | Endpoint              | Description        |
|-------|-----------------------|--------------------|
| GET   | `/api/tasks`          | Fetch all tasks    |
| POST  | `/api/tasks`          | Add a new task     |
| DELETE| `/api/tasks/{id}`     | Delete a task      |

---

## 🖥️ Frontend API Configuration

```javascript
const API = "http://localhost:8080/api/tasks";
````

* Axios is used for API communication
* Tasks are refreshed automatically after add or delete

---

## ▶️ How to Run the Project

### Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Runs on:
`http://localhost:8080`

---

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Runs on:
`http://localhost:5173`

---

## 🌍 CORS Configuration

Backend allows frontend requests using:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

---

## 📌 Future Enhancements

* ✅ Mark tasks as completed
* ✏️ Edit tasks
* 🔐 User authentication
* 🎨 Enhanced UI/UX
* ☁️ Cloud deployment

---

## 👩‍💻 Author

**Arushi**
Full Stack Developer (Spring Boot | React)

---

