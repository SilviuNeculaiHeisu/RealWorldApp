import React from "react";

export default function BankAccounts() {
  return (
    <div className="bankAccounts">
      <div className="card">
        <div className="container">
          <h3 style={{ color: "#127ed6" }}><b>Bank Accounts</b></h3>
          <p style={{ color: "#127ed6" }}>O`Hara - Labadie Bank</p>
          <button id="createBtn">Create</button>
          <button id="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
}
