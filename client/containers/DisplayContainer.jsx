import React from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';

export default function DisplayContainer({ total, setTotal, allTransactions, setAllTransactions, categoryPercent, setCategoryPercent }) {

  return (
    <div className = "displayContainer">
      <h3>October Spending:</h3>
      <InputsDisplay 
      allTransactions={allTransactions}
      setAllTransactions={setAllTransactions}
      setTotal={setTotal}
      setCategoryPercent={setCategoryPercent}
      />
      <Total 
        total={total}
      />
      <div id="chartContainer">
        <TotalsDisplay total={total}/>
        <PieChart
          allTransactions={allTransactions}
          total={total}
          categoryPercent={categoryPercent}
        />
      </div>
    </div>
  )
}
