import React, { useEffect, useState } from 'react';

export default function feedItem() {

  const [newTransactions, setNewTransactions] = useState([]);
  const [newTotal, setNewTotal] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/transactions')
      .then(response => response.json())
      .then(data => {
        console.log('data inside feetItem useEffect', data);
        setNewTransactions(data.data);
        setNewTotal(data.total);
      })
      .catch(err => {
        console.log('error fetching transaction data', err);
      });
  }, [])

  const deleteEntry = (identification) => {
    return function () {
      fetch('/api/transactions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: identification.transaction_id,
        })
      })
        .catch(err => console.log(err));
    }
  }

  const renderRows = [];

  for (let i = 0; i < newTransactions.length; i++) {
    renderRows.push(
      <tr className="row" key={i}>
        <td className='item'>{newTransactions[i].date}</td>
        <td className='item'>{newTransactions[i].name}</td>
        <td className='item'>{newTransactions[i].category}</td>
        <td className='item'>${newTransactions[i].amount}</td>
        <button className='delete' id='editButton' onClick={deleteEntry(newTransactions[i])}>X</button>
      </tr>
    )
  }

  return (
    <div className='feedItemContainer'>
      <div className="headerRow">
        <span className='header'>Date</span>
        <span className='header'>Transaction</span>
        <span className='header' >Category</span>
        <span className='header'>Amount</span>
      </div>
      <div className="feedItem">
        <div className="transactionTable">
          <table className="transactions">
            {renderRows}
          </table>
        </div>
      </div>
    </div>
  )
}



// class FeedItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...props
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // return this.onChange();
//     // console.log('prev props', prevProps);
//     // console.log('prev state', prevState);
//     // console.log('current state', this.state);
//     // console.log('current props', this.props);
//     if (this.props.transactions !== this.state.transactions) {
//       // console.log('new transaction added');
//       let newTransactions;
//       let newTotal;
//       fetch('http://localhost:8080/api/transactions')
//         .then(response => response.json())
//         .then(data => {
//           // console.log('received data', data);
//           newTransactions = data.data;
//           newTotal = data.total;
//           // this.setState({
//           //   transactions: newTransactions,
//           //   total: newTotal,
//           // })
//         })
//         .catch(err => {
//           console.log('error fetching transaction data', err);
//         })
//     }
//   }

//   getData() {
//     fetch('http://localhost:8080/api/transactions')
//       .then(response => response.json())
//       .then(data => {
//         // console.log('received data', data);
//         this.setState({
//           transactions: data.data,
//           total: data.total
//         });
//         // console.log(this.state);
//       })
//       .catch(err => {
//         console.log('error fetching transaction data', err);
//       });
//   }

//   delete(identification) {
//     return function () {
//       fetch('/api/transactions', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           id: identification.transaction_id,
//         })
//       })
//         .then(data => document.location.reload())
//         .catch(err => console.log(err));
//     }
//   }

//   componentDidMount() {
//     this.getData();

//     // setInterval(this.getData(), 1000);
//     // fetch('http://localhost:8080/api/transactions')
//     //   .then( response => response.json())
//     //   .then( data => {
//     //     // console.log('received data', data);
//     //     this.setState({
//     //       transactions: data.data,
//     //       total: data.total
//     //     });
//     //     // console.log(this.state);
//     //   })
//     //   .catch(err => {
//     //     console.log('error fetching transaction data', err);
//     //   });
//   }

//   //renderRows helper function 
//   renderRows() {
//     const rows = [];
//     const transactions = this.state.transactions
//     // console.log(transactions)
//     for (let i = 0; i < transactions.length; i++) {
//       rows.push(
//         <tr className="row" key={i}>
//           <td className='item'>{transactions[i].date}</td>
//           <td className='item'>{transactions[i].name}</td>
//           <td className='item'>{transactions[i].category}</td>
//           <td className='item'>${transactions[i].amount}</td>
//           <button className='delete' id='editButton' onClick={this.delete(transactions[i])}>X</button>
//         </tr>
//       )
//     }
//     return rows;
//   }

//   render() {
//     return (
//       <>
//         <div className="headerRow">
//           <span className='header'>Date</span>
//           <span className='header'>Transaction</span>
//           <span className='header' >Category</span>
//           <span className='header'>Amount</span>
//         </div>
//         <div className="feedItem">
//           <div className="transactionTable">
//             <table className="transactions">
//               {/* <tr className="row">
//                 <th className='item' id="itemHeader">Date</th>
//                 <th className='item' id="itemHeader">Transaction</th>
//                 <th className='item' id="itemHeader">Category</th>
//                 <th className='item' id="itemHeader">Amount</th>
//               </tr> */}
//               {this.renderRows()}
//             </table>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// export default FeedItem;