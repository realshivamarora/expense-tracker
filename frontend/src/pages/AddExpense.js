import React, { useEffect, useState } from 'react';
import './AddExpense.css';
import axios from 'axios';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    date: '',
    day: '',
    amount: '',
    madeAt: '',
    type: '',
    customType: '',
    remarks: ''
  });

  const expenseTypes = [
    'Food',
    'Travel',
    'Bills',
    'Entertainment',
    'Shopping',
    'Other'
  ];

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // yyyy-mm-dd
    setFormData((prev) => ({
      ...prev,
      date: formattedDate,
      day: getDayOfWeek(formattedDate),
    }));
  }, []);

  const getDayOfWeek = (dateStr) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(dateStr).getDay();
    return days[dayIndex];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'date' ? { day: getDayOfWeek(value) } : {}),
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const finalData = {
    ...formData,
    type: formData.type === 'Other' ? formData.customType : formData.type,
  };

  try {
    await axios.post('http://localhost:5000/api/expenses/add', finalData);
    alert('Expense recorded successfully!');
    setFormData((prev) => ({
      date: prev.date,
      day: getDayOfWeek(prev.date),
      amount: '',
      madeAt: '',
      type: '',
      customType: '',
      remarks: ''
    }));
  } catch (error) {
    console.error('Failed to record expense:', error);
    alert('Error saving expense');
  }
};


  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-dark">Add a New Expense</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Day</label>
          <input className="form-control" value={formData.day} disabled />
        </div>
        <div className="col-md-4">
          <label className="form-label">Amount (₹)</label>
          <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
            <label className="form-label">Made At (Optional)</label>
            <input
              className="form-control"
              name="madeAt"
              value={formData.madeAt}
              onChange={handleChange}
              placeholder="E.g., Home, Office, Outside"
            />
        </div>
        <div className="col-md-6">
          <label className="form-label">Expense Type</label>
          <select className="form-select" name="type" value={formData.type} onChange={handleChange} required>
            <option value="">-- Select Type --</option>
            {expenseTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {formData.type === 'Other' && (
          <div className="col-md-6">
            <label className="form-label">Custom Type</label>
            <input className="form-control" name="customType" value={formData.customType} onChange={handleChange} />
          </div>
        )}
        <div className="col-12">
          <label className="form-label">Remarks (Optional)</label>
          <textarea className="form-control" rows="2" name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
