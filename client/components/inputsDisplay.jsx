import React from "react";
import utils from "../utils";

export default function inputsDisplay({ allTransactions, setAllTransactions, setTotal, setCategoryPercent}) {

  const deleteEntry = (e) => {
    fetch("/api/transactions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAllTransactions(data.data);
        setTotal(data.total);
        utils.updatePieChart(data.data, data.total, setCategoryPercent);
      })
      .catch((err) => console.log(err));
  };

  const renderRows = [];
  for (let i = 0; i < allTransactions?.length; i++) {
    renderRows.push(
      <tr className="row" key={i}>
        <td className="item">{allTransactions[i].date}</td>
        <td className="item">{allTransactions[i].name}</td>
        <td className="item">{allTransactions[i].category}</td>
        <td className="item">${allTransactions[i].amount}</td>
        <button
          className="delete"
          id="editButton"
          value={allTransactions[i]._id}
          onClick={deleteEntry}
        >
          X
        </button>
      </tr>
    );
  }

  return (
    <div className="transactionsDisplay">
      <h1></h1>
      <div className="feedItemContainer">
        <div className="headerRow">
          <span className="header">Date</span>
          <span className="header">Transaction</span>
          <span className="header">Category</span>
          <span className="header">Amount</span>
        </div>
        <div className="feedItem">
          <div className="transactionTable">
            <table className="transactions">{renderRows}</table>
          </div>
        </div>
      </div>
    </div>
  );
}
