import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import ViewExpenses from './pages/ViewExpenses';
import Visualization from './pages/Visualization';

import './App.css'; // 👈 make sure this is included

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="container mt-4 mb-5 app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/view" element={<ViewExpenses />} />
            <Route path="/visualize" element={<Visualization />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
