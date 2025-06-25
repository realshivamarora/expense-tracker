import React from 'react';
import './Visualizations.css'; // optional for additional styling

const Visualizations = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Expense Analytics Dashboard</h3>

      {/* A. Expense Distribution by Type */}
      <div className="mb-5">
        <h5 className="mb-2">A. Expense Distribution by Type</h5>
        <iframe
          style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }}
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-xvhpzje/embed/charts?id=5332cbbe-dbc9-4eb9-840b-82f721df3ecc&maxDataAge=14400&theme=light&autoRefresh=true"
          title="Expense Distribution"
        ></iframe>
      </div>

      {/* B. Spending by Day of Week */}
      <div className="mb-5">
        <h5 className="mb-2">B. Spending by Day of Week</h5>
        <iframe
          style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }}
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-xvhpzje/embed/charts?id=393101dd-a769-49b1-bcab-340d9576255f&maxDataAge=14400&theme=light&autoRefresh=true"
          title="Spending by Day"
        ></iframe>
      </div>

      {/* C. Expense Share by Location */}
      <div className="mb-5">
        <h5 className="mb-2">C. Expense Share by Location</h5>
        <iframe
          style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }}
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-xvhpzje/embed/charts?id=c495e4c0-6f87-4219-a8f9-773e690f5075&maxDataAge=14400&theme=light&autoRefresh=true"
          title="Location-wise Expense Share"
        ></iframe>
      </div>

      {/* D. Monthly Expense Trends */}
      <div className="mb-5">
        <h5 className="mb-2">D. Trends in Monthly Expenditure: Aggregate Analysis</h5>
        <iframe
          style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }}
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-xvhpzje/embed/charts?id=4871ec75-1742-4297-8ecd-6694875312fc&maxDataAge=14400&theme=light&autoRefresh=true"
          title="Monthly Trends"
        ></iframe>
      </div>
    </div>
  );
};

export default Visualizations;
