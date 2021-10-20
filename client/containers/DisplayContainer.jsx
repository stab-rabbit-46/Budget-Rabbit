import React from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';


export default function DisplayContainer({ total, transactionName, transactionAmount }) {



  return (
    <div className = "displayContainer">
      <h3>October Spending:</h3>
      <InputsDisplay />
      <Total 
        transactionName={transactionName}
        transactionAmount={transactionAmount} 
        total={total}
      />
      <div id="chartContainer">
        <TotalsDisplay total={total}/>
        <PieChart />
      </div>
    </div>
  )
}


// class DisplayContainer extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         transactions: this.props.transactions,
//         total: this.props.total
//       };
//     }

//     render(){
//       return (
//         <div className = "displayContainer">
//           <h3>October Spending:</h3>
//           <InputsDisplay transactions={this.state.transactions} total={this.state.total} />
//           <Total />
//           <div id="chartContainer">
//             <TotalsDisplay total={this.state.total}/>
//             <PieChart />
//           </div>
//         </div>
//       )
//     }
// }

// export default DisplayContainer;