# **🌍 Travel-Journal App**  

A full-stack **MERN** application for travel journaling, allowing users to book trips, manage itineraries, and access support.  

---

## **🚀 Tech Stack**  
- **Frontend**: React.js, Bootstrap  
- **Backend**: Node.js, Express.js, MongoDB  
- **Database**: MongoDB Atlas / Local MongoDB  
- **Version Control**: Git & GitHub  

---

## **📌 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/mona-2010/Travel-App.git
cd Travel-App
```

---

## **⚙️ Backend Setup**  

### **1️⃣ Navigate to the Backend Folder**  
```bash
cd backend
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Create a `.env` File**  
Create a `.env` file inside the **backend** folder and add the following environment variables:  
```env
PORT=4000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/yourDB
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:4000/api/v1
```

> ⚠️ **Note**: Replace `MONGO_URI` with your **MongoDB Atlas** or **local MongoDB connection string**.

### **4️⃣ Start the Backend Server**  
```bash
npm run start-dev
```
or (if using `nodemon`)  
```bash
nodemon server.js
```

> ✅ **Backend running on**: `http://localhost:4000`

---

## **🖥️ Frontend Setup**  

### **1️⃣ Navigate to the Frontend Folder**  
```bash
cd ../frontend
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Start the Frontend Server**  
```bash
npm start
```

> ✅ **Frontend running on**: `http://localhost:3000`

---

## **📡 API Endpoints**  

| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | User login |
| **GET** | `/api/tours` | Get all tours |
| **POST** | `/api/bookings` | Book a trip |
| **POST** | `/api/support/submit` | Submit a support request |

---

## **🐞 Common Issues & Fixes**  
❌ **Error: `MONGO_URI` is not defined**  
✅ **Solution**: Check your `.env` file and restart the server.  

❌ **Error: `nodemon: command not found`**  
✅ **Solution**: Install nodemon globally:  
```bash
npm install -g nodemon
```

❌ **Frontend not connecting to backend?**  
✅ **Solution**: Ensure both frontend (`3000`) and backend (`4000`) are running.  

---

## **📜 License**  
This project is open-source and available under the **MIT License**.

---

🚀 **Happy Coding!** 🎉
