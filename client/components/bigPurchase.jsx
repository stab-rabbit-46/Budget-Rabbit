import React from 'react'

function BigPurchase( {total} ) {

  const bigPurchaseAmount = 10000;

  return (
    <div className="totalsDisplay">
    <div>
      Big Purchase:
      <br></br>
      <center>{bigPurchaseAmount}</center>
    </div>
    <div>
      Total Saved:
      <br></br>
      <center>{total}</center>
    </div>
    <div>
      Remaining:
      <br></br>
      <center>{bigPurchaseAmount - total}</center>
    </div>
    <div className='budgetUpdater'>
      <input className="input" placeholder='Enter goal amount here'></input>
      <button id="editButton">Edit Budget</button>
    </div>
  </div>
  )
}

export default BigPurchase
