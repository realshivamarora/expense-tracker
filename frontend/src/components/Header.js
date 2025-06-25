import React from "react";
import "./Header.css"; // custom CSS for styling

const Header = () => {
  return (
    <header className="custom-header text-center py-4">
      <h1 className="header-title mb-2">Expense Tracker</h1>
      <p className="header-subtext mb-0">
        Powered by{" "}
        <a
          href="https://aroratech.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          AroraTech (Shivam Arora)
        </a>
      </p>
    </header>
  );
};

export default Header;
