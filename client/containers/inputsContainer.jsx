import React from 'react';

function inputsContainer({ transactionName, transactionAmount, setTransactionName, setTransactionAmount, transactionCategory, setTransactionCategory, submit }) {
  const optionsArr = ['Housing/Rent', 'Utilities', 'Gas', 'Groceries', 'Dining Out', 'Drinks', 'Entertainment', 'Savings', 'Other'];

  const option = [<option value="" selected disabled hidden >Choose Category</option>];
  for(let i = 0, len = optionsArr.length; i < len; i++){
    option.push(<option value={i} key={i}>{optionsArr[i]}</option>)
  }
  
  return (
    <div className = 'inputContainer'>
      <h3></h3>
      <input 
        type="text" 
        className='input' 
        id="transactionName" 
        placeholder='Transaction' 
        value={transactionName} 
        onChange={e => setTransactionName(e.target.value)} 
      />
      <input 
        type="text" 
        className='input' 
        id="transactionAmt" 
        placeholder='Amount' 
        value={transactionAmount} 
        onChange={e => setTransactionAmount(e.target.value)} 
      />

      <select 
        name="Category" 
        className='input' 
        id="category" 
        value={transactionCategory} 
        onChange={e => setTransactionCategory(e.target.value)}
        >
        {/* <option disabled selected value="1">Choose Category</option> */}
        {option}
      </select>
      <button onClick={submit} id="submitButton">Add Transaction</button>
    </div>
  )
}

export default inputsContainer;



// import React, { Component } from 'react';

// class InputsContainer extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         // transactions: this.props.transactions,
//         // total: this.props.total,
//         // name: this.props.name,
//         // amount: this.props.amount,
//         // category: this.props.category
//       }
//     }

//     render(){
//       return (
//         <div className = 'inputContainer'>
//           <h3></h3>
//           <input type="text" className='input' id="transactionName" placeholder='Transaction'/>
//           <input type="text" className='input' id="transactionAmt" placeholder='Amount'/>
//           <select name="Category" className='input' id="category">
//             {/* <option value="1">test</option> */}
//             <option disabled selected value="1">Choose Category</option>
//             <option value="2">Housing/Rent</option>
//             <option value="3">Utilities</option>
//             <option value="4">Gas</option>
//             <option value="5">Groceries</option>
//             <option value="6">Dining Out</option>
//             <option value="7 ">Drinks</option>
//             <option value="8">Entertainment</option>
//             <option value="9">Savings</option>
//             <option value="10">Other</option>
//           </select>
//           <button onClick={this.props.submit} id="submitButton">Add Transaction</button>
//         </div>
//       )
//     }
// }

// export default InputsContainer;