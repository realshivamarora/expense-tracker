![image](https://github.com/user-attachments/assets/08eb30ae-ccd6-4226-8064-b5ff5fc8beb4)![image](https://github.com/user-attachments/assets/087eafe5-b10d-4272-9ac6-209dcf98e13a)# 💸 Expense Tracker Application

> A full-stack web application to manage and visualize your expenses smartly.

---

## 🚀 Live Demo

- 🔗 Frontend (Netlify): [https://your-frontend-link.netlify.app](https://expense-tracker-aroratech.netlify.app/)
- 🔗 Backend (Render): ([https://your-backend.onrender.com](https://expense-tracker-iinq.onrender.com)

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/d96fb537-16af-482f-9809-a70881ff7988)
![image](https://github.com/user-attachments/assets/22794d32-e899-4f80-8d8d-79ef1a1cdc94)
![image](https://github.com/user-attachments/assets/ee958bfe-dda7-4e7b-b8f7-5d209d2c40ca)
![image](https://github.com/user-attachments/assets/8d18602b-c3c0-491d-9951-c16d0fcfd48c)
![image](https://github.com/user-attachments/assets/68da7811-e3a1-42f8-8eae-95d17b0d3192)
![image](https://github.com/user-attachments/assets/95f13001-1211-4675-9b61-c9a456c3d114)
![image](https://github.com/user-attachments/assets/037d5879-1e4f-478e-b695-4b35d5ab4508)
![image](https://github.com/user-attachments/assets/92e9204f-e630-40bb-9ba0-2848b1e92c29)
![image](https://github.com/user-attachments/assets/ad34c6e1-dcb1-4722-b595-6d4481e2a3bf)
![image](https://github.com/user-attachments/assets/057d8177-dced-45e7-91e6-bb3cd08570f6)
![image](https://github.com/user-attachments/assets/bc9fb17b-0d06-4a40-ba05-1d281d4cd9ca)
![image](https://github.com/user-attachments/assets/1aa0e5e2-cfd8-4e23-8843-9d4d427fb6e2)
![image](https://github.com/user-attachments/assets/969b9154-9bfa-4a1b-b7d8-ec048581ee9e)
![image](https://github.com/user-attachments/assets/1b464066-6634-4cbf-abc8-5c089c3de2c8)

---

## 🛠️ Tech Stack

**Frontend:**
- ReactJS (CRA)
- Bootstrap 5
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS enabled

**Deployment:**
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

---

## 🧩 Features

- Add, edit, and delete expense records
- Filter expenses by:
  - Date range
  - Category
  - Amount (>, <, =)
- Embedded MongoDB Charts for:
  - Pie Chart (Category Distribution)
  - Bar Chart (Monthly Spend)
- Responsive and user-friendly design
- Clean codebase with modular structure

---

## 🗂️ Folder Structure

/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── screenshots/
└── README.md

---

## 🧪 API Endpoints
- POST - add a new expense
- GET - fetch some or all expenses
- PUT - update an expense
- DELETE - delete an expense

---

## ⚙️ Local Development Setup

### Backend

```bash
cd backend
npm install
```

```
# Create a `.env` file with:
# MONGODB_URI=<your_mongodb_connection_string>
node index.js
```

---

## 📦 Deployment Instructions

### Backend (Render)
- Create a new Web Service
- Root Directory: backend/
- Build Command: npm install
- Start Command: node index.js
- Add env vars: MONGODB_URI, PORT

### Frontend (Netlify)
- Connect to GitHub repo
- Publish directory: frontend/build
- Build command: npm run build
- Add REACT_APP_API_BASE_URL as env var

---

# 🙋‍♂️ Author
**Shivam Arora**
B.Tech CSE, Lovely Professional University
[GitHub](https://github.com/realshivamarora) | [LinkedIn](https://www.linkedin.com/in/therealshivamarora/) | [aroratech.tech](https://aroratech.tech/)

---
