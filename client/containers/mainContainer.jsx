import React, { useEffect, useState } from "react";
import InputsContainer from "./inputsContainer.jsx";
import DisplayContainer from "./DisplayContainer.jsx";
import logo from "../../logo.png";
import utils from "../utils.js";

function mainContainer() {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [total, setTotal] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);
  const [categoryPercent, setCategoryPercent ] = useState([11, 11, 11, 11, 11, 11, 11, 11, 11]);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [bigPurchase, setBigPurchase] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log('budgets in mainContainer', data.budgets);
        setMonthlyBudget(data.budgets[0].amount);
        setBigPurchase(data.budgets[1].amount);
        setAllTransactions(data.data);
        setTotal(data.total);
        utils.updatePieChart(data.data, data.total, setCategoryPercent);
      })
      .catch((err) => {
        console.log("error fetching transaction data", err);
      });
  }, []);

  const submit = () => {
    if (transactionCategory !== "") {
      fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: transactionName,
          amount: transactionAmount,
          date: new Date().toLocaleDateString(),
          category_id: transactionCategory,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setAllTransactions(data.data);
          setTotal(data.total);
          utils.updatePieChart(data.data, data.total, setCategoryPercent);
          setTransactionName('');
          setTransactionAmount('');
          setTransactionCategory('');
        })
        .catch((err) => console.log(err));
    } else {
      console.log(
        'submit was clicked while category was still "choose category"',
      );
    }
  };

  return (
    <div className="mainContainer">
      <img src={logo} id="logo" />
      <InputsContainer
        transactionName={transactionName}
        transactionAmount={transactionAmount}
        setTransactionName={setTransactionName}
        setTransactionAmount={setTransactionAmount}
        transactionCategory={transactionCategory}
        setTransactionCategory={setTransactionCategory}
        submit={submit}
      />
      <DisplayContainer
        total={total}
        setTotal={setTotal}
        allTransactions={allTransactions}
        setAllTransactions={setAllTransactions}
        categoryPercent={categoryPercent}
        setCategoryPercent={setCategoryPercent}
        monthlyBudget={monthlyBudget}
        setMonthlyBudget={setMonthlyBudget}
        setBigPurchase={setBigPurchase}
        bigPurchase={bigPurchase}
      />
    </div>
  );
}

export default mainContainer;
