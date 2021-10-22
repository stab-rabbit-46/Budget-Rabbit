import React, {useState} from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';
import BigPurchase from '../components/BigPurchase.jsx';

export default function DisplayContainer({ total, setTotal, allTransactions, setAllTransactions, categoryPercent, setCategoryPercent, monthlyBudget, bigPurchase, setMonthlyBudget, setBigPurchase}) {

  const [ inputBudget, setInputBudget ] = useState('');
  const [ inputBigPurchase, setInputBigPurchase ] = useState('');

  const bigPurchaseLabels = ["Saved","Needed"];
  const budgetLabels = [
    "Housing/Rent",
    "Utilities",
    "Gas",
    "Groceries",
    "Dining Out",
    "Drinks",
    "Entertainment",
    "Savings",
    "Other",
  ];

 
  // look at e.target.value and what to put on body of request
  const updateBudget = (e) => {
    console.log(e.target);
    fetch("/api/transactions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        budget_name: e.target.name,
        amount: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data.budget inside Display Container: ', data.budget);
        for(let budget of data?.budgets){
          budget['budget_name'] === 'Monthly Budget' ? setMonthlyBudget(budget.amount) : setBigPurchase(budget.amount)
        }
        setInputBudget('');
        setInputBigPurchase('');
        
      })
      .catch((err) => console.log(err));
  };



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
        <TotalsDisplay 
          total={total}
          monthlyBudget={monthlyBudget}
          setMonthlyBudget={setMonthlyBudget}
          updateBudget={updateBudget}
          inputBudget={inputBudget}
          setInputBudget={setInputBudget}
        />
        <PieChart
          title={'Total Spending'}
          currentLabels={budgetLabels}
          categoryPercent={categoryPercent}
        />
      </div>
      <div id="chartContainer">
        <BigPurchase 
          total={total}
          bigPurchase={bigPurchase}
          setBigPurchase={setBigPurchase}
          updateBudget={updateBudget}
          inputBigPurchase={inputBigPurchase}
          setInputBigPurchase={setInputBigPurchase}
        />
        {/* <PieChart
          title={'Total Saved'}
          currentLabels={bigPurchaseLabels}
          categoryPercent={categoryPercent}
        /> */}
      </div>
    </div>
  )
}
