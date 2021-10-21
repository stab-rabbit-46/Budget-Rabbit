import React from 'react'

const TotalsDisplay = ({ total }) => {

  const budget = 5000;

  return (
    <div className="totalsDisplay">
      <div>
        Budget:
        <br></br>
        <center>{budget}</center>
      </div>
      <div>
        Total Spent:
        <br></br>
        <center>{total}</center>
      </div>
      <div>
        Remaining:
        <br></br>
        <center>{budget - total}</center>
      </div>
      <div className='budgetUpdater'>
        <input className="input" placeholder='Enter new budget here'></input>
        <button id="editButton">Edit Budget</button>
      </div>
    </div>
  )
}

export default TotalsDisplay;

