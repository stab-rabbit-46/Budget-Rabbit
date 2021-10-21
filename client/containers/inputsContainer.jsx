import React from "react";

function inputsContainer({
  transactionName,
  transactionAmount,
  setTransactionName,
  setTransactionAmount,
  transactionCategory,
  setTransactionCategory,
  submit,
}) {
  const optionsArr = [
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

  const option = [
    <option value="" selected disabled hidden>
      Choose Category
    </option>,
  ];
  for (let i = 0, len = optionsArr.length; i < len; i++) {
    option.push(
      <option value={i + 2} key={i}>
        {optionsArr[i]}
      </option>
    );
  }

  return (
    <div className="inputContainer">
      <h3></h3>
      <input
        type="text"
        className="input"
        id="transactionName"
        placeholder="Transaction"
        value={transactionName}
        onChange={(e) => setTransactionName(e.target.value)}
      />
      <input
        type="text"
        className="input"
        id="transactionAmt"
        placeholder="Amount"
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
      />

      <select
        name="Category"
        className="input"
        id="category"
        value={transactionCategory}
        onChange={(e) => setTransactionCategory(e.target.value)}
      >
        {option}
      </select>
      <button onClick={submit} id="submitButton">
        Add Transaction
      </button>
    </div>
  );
}

export default inputsContainer;
