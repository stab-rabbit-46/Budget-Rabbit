import React, {useState} from 'react';

function BigPurchase( {total, bigPurchase, setBigPurchase, updateBudget, inputBigPurchase, setInputBigPurchase} ) {

  // const bigPurchaseAmount = 10000;
  const [wow, setWow] = useState(0)

  return (
    <div className="totalsDisplay">
    <div>
      Big Purchase:
      <br></br>
      <center>{bigPurchase}</center>
    </div>
    <div>
      Total Saved:
      <br></br>
      <center>{total}</center>
    </div>
    <div>
      Remaining:
      <br></br>
      <center>{bigPurchase - total}</center>
    </div>
    <div className='budgetUpdater'>
      <input className="input" placeholder='Enter big purchase amount here' onChange={(e) => setInputBigPurchase(e.target.value)}></input>
      <button id="editButton" name={'Big Purchase'} value={inputBigPurchase} onClick={updateBudget} >Edit Purchase</button>
    </div>
  </div>
  )
}
/**
 * <input className="input" placeholder='Enter new budget here' onChange={(e) => setInputBudget(e.target.value)}></input>
 * <button id="editButton" name={'Monthly Budget'} value={inputBudget} onClick={updateBudget}>Edit Budget</button>
 */

export default BigPurchase;
