# 💸 Expense Tracker Application

> A full-stack web application to manage and visualize your expenses smartly.

---

## 🚀 Live Demo

- 🔗 Frontend (Netlify): [https://your-frontend-link.netlify.app](https://expense-tracker-aroratech.netlify.app/)
- 🔗 Backend (Render): ([https://your-backend.onrender.com](https://expense-tracker-iinq.onrender.com)

---

## 📸 Screenshots

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
