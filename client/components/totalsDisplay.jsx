import React, {useState} from 'react';

const TotalsDisplay = ({ total, monthlyBudget, setMonthlyBudget, updateBudget, inputBudget, setInputBudget }) => {




  return (
    <div className="totalsDisplay">
      <div>
        Budget:
        <br></br>
        <center>{monthlyBudget}</center>
      </div>
      <div>
        Total Spent:
        <br></br>
        <center>{total}</center>
      </div>
      <div>
        Remaining:
        <br></br>
        <center>{monthlyBudget - total}</center>
      </div>
      <div className='budgetUpdater'>
        <input className="input" placeholder='Enter new budget here' onChange={(e) => setInputBudget(e.target.value)}></input>
        <button id="editButton" name={'Monthly Budget'} value={inputBudget} onClick={updateBudget}>Edit Budget</button>
      </div>
    </div>
  )
}

export default TotalsDisplay;

