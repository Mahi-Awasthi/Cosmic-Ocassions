import React, { useState } from 'react';
import '../ExpenseTracker.css'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseTracker = () => {
  const [budget, setBudget] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseDesc, setExpenseDesc] = useState('');
  const [expenseVal, setExpenseVal] = useState('');
  const [date, setDate] = useState('');

  const addBudget = () => {
    const amount = Number(budget);
    if (!isNaN(amount) && amount > 0) {
      setTotalExpense(0);
      setExpenses([]);
      setBudget(amount);
    }
  };

  const addExpense = () => {
    const value = Number(expenseVal);
    if (!isNaN(value) && value > 0 && expenseDesc && date) {
      setExpenses([...expenses, { description: expenseDesc, value, date }]);
      setTotalExpense(totalExpense + value);
      setExpenseDesc('');
      setExpenseVal('');
      setDate('');
    }
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setTotalExpense(totalExpense - expenses[index].value);
    setExpenses(newExpenses);
  };

  return (
    <>
     {/* NAVBAR SECTION */}
     <nav className="navbar navbar-expand-sm sticky-top navbar-dark" style={{ backgroundColor: '#6c7d5a' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-md-none" to="/">
            <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <Link className="navbar-brand d-none d-md-block" to="/">
                <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav><br/><br/>
    <div className="container">
      <mainMe>
        <div className="balanceHead">
          <p>My Balance</p>
          <h1>₹ {budget - totalExpense}</h1>
        </div>
        <div className="formContainer">
          <h3>ADD BUDGET</h3>
          <div className="budgetInput">
            <input
              type="number"
              placeholder="Enter Amount"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <button onClick={addBudget}>Add Budget</button>
          </div>
          <h3>ADD EXPENSE</h3>
          <div className="expenseInput">
            <select value={expenseDesc} onChange={(e) => setExpenseDesc(e.target.value)}>
              <option value="" disabled>Description</option>
              <option value="Venue">Venue</option>
              <option value="Equipments">Equipments</option>
              <option value="Decor">Decor</option>
              <option value="Catering">Catering</option>
              <option value="Transportation">Transportation</option>
              <option value="Team and staff">Team and staff</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
            <input
              type="number"
              placeholder="Enter Amount"
              value={expenseVal}
              onChange={(e) => setExpenseVal(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={addExpense}>Add Expense</button>
          </div>
        </div>
        <div className="overview balanceHead">
          <div>
            <p>Total Budget</p>
            <h1>₹ {budget}</h1>
          </div>
          <div>
            <p>Expenses</p>
            <h1>₹ {totalExpense}</h1>
          </div>
        </div>
        <div className="expenseList formContainer">
          <h2>Expense List</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>₹ {expense.value}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button onClick={() => removeExpense(index)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </mainMe>
    </div><br/><br/><br/><br/>
     {/* FOOTER SECTION */}
     <div className="logo-container">
        <div className="line"></div>
        <div className="logo">
          <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
        </div>
        <div className="line"></div>
      </div>
      <footer>
        <table>
          <tr>
            <td id="one">
            <ul id="link">
                  <li><Link to="/portfolio">PORTFOLIO</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/expensetracker">EXPENSE TRACKER</Link></li>
                  <li><Link to="/Dashboard">DASHBOARD</Link></li>
                </ul>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="two">
              <div className="next">
                <p>Destination weddings & events worldwide.</p>
                <h6>join us @cosmic_occasions</h6>
                <br /><br /><br />
                <h7>© 2019 Cosmic Occasions. All Rights Reserved.</h7>
              </div>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="three">
              <img src="COSMIC_OCCASSIONS-removebg-preview.png" id="lg" alt="Logo" /><br /><br />
              <a href="/contact" id="button">CONTACT</a>
            </td>
          </tr>
        </table>
      </footer>
    </>
  );
};

export default ExpenseTracker;
