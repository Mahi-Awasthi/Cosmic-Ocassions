import React, { useState } from 'react';
import '../ExpenseTracker.css'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseTracker = () => {
    const [budget, setBudget] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [expenseVal, setExpenseVal] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const addBudget = () => {
        const amount = Number(budget);
        if (!isNaN(amount) && amount > 0) {
            setBudget(amount);
        } else {
            alert('Please enter a valid budget amount');
        }
    };

    const addExpense = () => {
        const expVal = Number(expenseVal);
        if (!isNaN(expVal) && expVal > 0 && description && date) {
            const newExpenses = [...expenses, { description, expVal, date }];
            setExpenses(newExpenses);
            setTotalExpense(prev => prev + expVal);
            setBudget(prev => prev - expVal);
            clearInputs();
        } else {
            alert('Please fill in all fields correctly');
        }
    };

    const clearInputs = () => {
        setExpenseVal('');
        setDescription('');
        setDate('');
    };

    const removeExpense = (index) => {
        const expVal = expenses[index].expVal;
        const newExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(newExpenses);
        setTotalExpense(prev => prev - expVal);
        setBudget(prev => prev + expVal);
    };

    return (
        <div className="container">
        {/* NAVBAR SECTION */}
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark" style={{ backgroundColor: '#6c7d5a' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview.png" alt="Logo" style={{ width: '50px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <mainA><br></br>
            <div className="container center">
                <div className="balanceHead">
                    <div className="balance">
                        <p>My Balance</p>
                        <h1>₹ {budget}</h1>
                    </div>
                </div>
                <div className="formContainer">
                    <h3>ADD BUDGET</h3>
                    <div className="budgetInput">
                        <input 
                            type="number" 
                            placeholder="Enter Amount in Numbers, e.g.5000" 
                            value={budget} 
                            onChange={(e) => setBudget(e.target.value)} 
                        />
                        <button onClick={addBudget}>Add Budget</button>
                    </div>
                    <h3>ADD EXPENSE</h3>
                    <div className="expenseInput">
                        <select 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required
                        >
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
                    <table id="abc">
                        <thead>
                            <tr>
                                <td>Description</td>
                                <td>Amount</td>
                                <td>Date</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense, index) => (
                                <tr key={index}>
                                    <td>{expense.description}</td>
                                    <td>₹ {expense.expVal}</td>
                                    <td>{expense.date}</td>
                                    <td>
                                        <div 
                                            className="removebtn" 
                                            onClick={() => removeExpense(index)}
                                        >
                                            X
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
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
                  <li><Link to="/services">SERVICES</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/expense-tracker">EXPENSE TRACKER</Link></li>
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
              <a href="contact.html" id="button">CONTACT</a>
            </td>
          </tr>
        </table>
      </footer>
    </mainA>
    </div>
    );
};

export default ExpenseTracker;
