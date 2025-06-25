import React, { useState } from 'react';
import axios from 'axios';
import './ViewExpenses.css';

const ViewExpenses = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    category: '',
    amountType: '',
    amountValue: ''
  });

  const [expenses, setExpenses] = useState([]);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const fetchFilteredExpenses = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/expenses/filter', {
      ...filters,
    });
    setExpenses(response.data);
  } catch (err) {
    console.error('Filter fetch failed:', err);
    alert('Failed to fetch expenses. Check console for details.');
  }
};

const handleUpdate = async (id) => {
  const expenseToUpdate = expenses.find((e) => e._id === id);
  try {
    await axios.put(`http://localhost:5000/api/expenses/update/${id}`, expenseToUpdate);
    setEditingId(null);
    alert('Expense updated successfully!');
  } catch (error) {
    console.error('Update Error:', error);
    alert('Failed to update expense');
  }
};


const fetchAllExpenses = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/expenses/filter', {});
    setExpenses(response.data);
  } catch (err) {
    console.error('Fetch all failed:', err);
    alert('Failed to fetch all expenses');
  }
};

const handleDelete = async (id) => {
  if (!window.confirm('Are you sure you want to delete this entry?')) return;
  try {
    await axios.delete(`http://localhost:5000/api/expenses/delete/${id}`);
    setExpenses((prev) => prev.filter((exp) => exp._id !== id));
  } catch (error) {
    console.error('Delete Error:', error);
    alert('Failed to delete expense');
  }
};


  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleRowChange = (id, field, value) => {
  setExpenses((prev) =>
    prev.map((exp) =>
      exp._id === id ? { ...exp, [field]: value } : exp
    )
  );
};


  const clearSearch = () => {
    setFilters({ fromDate: '', toDate: '', category: '', amountType: '', amountValue: '' });
    setExpenses([]);
  };

  return (
    <div className="container mt-4 view-wrapper">
      <h4 className="mb-4 text-dark">View & Manage Expenses</h4>

      {/* Filters */}
      {/* Filters */}
<div className="mb-4 p-3 bg-light rounded shadow-sm border">

  <h5 className="mb-3">🔍 Filter Expenses</h5>

  {/* Date Filter */}
  <div className="mb-3">
    <label className="form-label fw-semibold">📅 Filter by Date</label>
    <div className="row g-2">
      <div className="col-md-6">
        <input type="date" name="fromDate" className="form-control" value={filters.fromDate} onChange={handleFilterChange} />
        <div className="form-text">From Date</div>
      </div>
      <div className="col-md-6">
        <input type="date" name="toDate" className="form-control" value={filters.toDate} onChange={handleFilterChange} />
        <div className="form-text">To Date</div>
      </div>
    </div>
  </div>

  {/* Category Filter */}
  <div className="mb-3">
    <label className="form-label fw-semibold">🏷️ Filter by Category</label>
    <select name="category" className="form-select" value={filters.category} onChange={handleFilterChange}>
      <option value="">-- Select --</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Amount Filter */}
  <div className="mb-3">
    <label className="form-label fw-semibold">💰 Filter by Amount</label>
    <div className="row g-2">
      <div className="col-md-3">
        <select name="amountType" className="form-select" value={filters.amountType} onChange={handleFilterChange}>
          <option value="">--</option>
          <option value="<">&lt;</option>
          <option value="<=">&lt;=</option>
          <option value="=">=</option>
          <option value=">">&gt;</option>
          <option value=">=">&gt;=</option>
        </select>
      </div>
      <div className="col-md-9">
        <input
          type="number"
          name="amountValue"
          className="form-control"
          value={filters.amountValue}
          onChange={handleFilterChange}
          placeholder="Enter amount"
        />
      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="d-flex gap-2 mt-3">
    <button className="btn btn-primary" onClick={fetchFilteredExpenses}>Fetch</button>
    <button className="btn btn-primary" onClick={fetchAllExpenses}>Fetch All</button>
    <button className="btn btn-outline-danger" onClick={clearSearch}>Clear Search</button>
  </div>

</div>


      {/* Actions */}
      {expenses.length > 0 && (
        <div className="mb-3">
          <button className="btn btn-warning me-2" onClick={() => setSelectMode(!selectMode)}>
            {selectMode ? 'Cancel Select' : 'Select Entries'}
          </button>
          {selectMode && (
            <button className="btn btn-danger" disabled={selectedIds.length === 0}>
              Delete Selected
            </button>
          )}
        </div>
      )}

      {/* Expenses Table */}
      {expenses.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>{selectMode ? 'Select' : '#'}</th>
                <th>Date</th>
                <th>Day</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Remarks</th>
                <th>Made At</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
  {expenses.map((exp, idx) => (
    <tr key={exp._id}>
      <td>
        {selectMode ? (
          <input
            type="checkbox"
            checked={selectedIds.includes(exp._id)}
            onChange={() => handleCheckboxChange(exp._id)}
          />
        ) : (
          idx + 1
        )}
      </td>
      <td>
        {editingId === exp._id ? (
          <input
            className="form-control"
            value={exp.date}
            onChange={(e) => handleRowChange(exp._id, 'date', e.target.value)}
          />
        ) : (
          exp.date
        )}
      </td>
      <td>{exp.day}</td>
      <td>
        {editingId === exp._id ? (
          <input
            className="form-control"
            value={exp.amount}
            onChange={(e) => handleRowChange(exp._id, 'amount', e.target.value)}
          />
        ) : (
          exp.amount
        )}
      </td>
      <td>
        {editingId === exp._id ? (
          <input
            className="form-control"
            value={exp.type}
            onChange={(e) => handleRowChange(exp._id, 'type', e.target.value)}
          />
        ) : (
          exp.type
        )}
      </td>
      <td>
        {editingId === exp._id ? (
          <input
            className="form-control"
            value={exp.remarks}
            onChange={(e) => handleRowChange(exp._id, 'remarks', e.target.value)}
          />
        ) : (
          exp.remarks
        )}
      </td>
      <td>
        {editingId === exp._id ? (
          <input
            className="form-control"
            value={exp.madeAt}
            onChange={(e) => handleRowChange(exp._id, 'madeAt', e.target.value)}
          />
        ) : (
          exp.madeAt
        )}
      </td>
      <td>
        {editingId === exp._id ? (
          <button className="btn btn-success btn-sm" onClick={() => handleUpdate(exp._id)}>
            Update
          </button>
        ) : (
          <button className="btn btn-outline-primary btn-sm" onClick={() => setEditingId(exp._id)}>
            ✏️
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(exp._id)}>
          🗑️
        </button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      ) : (
        <p className="text-muted">No records to display.</p>
      )}
    </div>
  );
};

export default ViewExpenses;
