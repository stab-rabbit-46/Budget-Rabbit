import React, { useEffect, useState } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import logo from '../../Pockets-logo.png';


function mainContainer() {
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [ transactionCategory, setTransactionCategory ] = useState('');
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    //Get request?
  }, [])
  
  // if transaction category equal to ''
  const submit = () => {
    if (!transactionCategory === '') {
      fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: transactionName,
          amount: transactionAmount,
          date: new Date().toLocaleDateString(),
          category_id: transactionCategory
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('data: line 32 in mainContainer: ', data);
          const transactions = data.data;
          // // transactions.push(data);
          // this.setState({
          //   transactions: transactions,
          //   total: data.total
          // });
          // document.location.reload();
        })
        .catch(err => console.log(err));
    }
    else {
      console.log('submit was clicked while category was still "choose category"');
    }
  };

  return (  
  <div className = 'mainContainer'>
    <img src={logo} id="logo"/>
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
      transactionName={transactionName}
      transactionAmount={transactionAmount} 
      total={total}
    />
  </div>
  )
}

export default mainContainer;


// import React, { Component } from 'react';
// import InputsContainer from './inputsContainer.jsx';
// import DisplayContainer from './displayContainer.jsx';

// import logo from '../../Pockets-logo.png';


// class MainContainer extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         transactions: [],
//         total: 0,
//       };

//       this.submit = this.submit.bind(this);

//     }

//     submit(){
//       console.log('submit activated')
//       if(document.getElementById('category').value !== "1"){
//         fetch('/api/transactions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             name: document.getElementById('transactionName').value,
//             amount: document.getElementById('transactionAmt').value,
//             date: new Date().toLocaleDateString(),
//             category_id: document.getElementById('category').value
//           })
//         })
//         .then(response => response.json())
//         .then(data => {
//           // console.log(data);
//           // console.log(this.state);
//           const transactions = data.data;
//           // // transactions.push(data);
//           this.setState({
//             transactions: transactions,
//             total: data.total
//           });
//           // document.location.reload();
//         })
//         })
//         .catch(err => console.log(err));
//       }
//       else{
//         console.log('submit was clicked while category was still "choose category"');
//       }
//     };



//     render(){
//       return (
//         <div className = 'mainContainer'>
//           <img src={logo} id="logo"/>
//           <InputsContainer state={this.state} submit={this.submit}/>
//           <DisplayContainer transactions={this.state.transactions} total={this.state.total} />
//         </div>
//       )
//     };
// }

// export default MainContainer;