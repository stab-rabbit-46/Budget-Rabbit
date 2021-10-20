import React from 'react';
import FeedItem from "./feedItem.jsx"


export default function inputsDisplay() {
  return (
    <div className='transactionsDisplay'>
      <h1></h1>
      {/* <FeedItem transactions={transactions} total={total} /> */}
      <FeedItem />
    </div>
  )
}


// class InputsDisplay extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         transactions: this.props.transactions,
//         total: this.props.total
//       };
//     }

//     render(){
//       return (
//         <div className='transactionsDisplay'>
//           <h1></h1>
//           <FeedItem transactions={this.state.transactions} total={this.state.total} />
//         </div>
//       )
//     }
// }

// export default InputsDisplay;