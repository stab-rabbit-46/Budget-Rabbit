const utils = {
  plugins: [{
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      //  var fontSize = (height / 160).toFixed(2);
      var fontSize = "50px";
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  }],
  pieChartOptions: {
    responsiveness: true,
    title: {
      display: true,
      text: "Total Spending",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  },
  updatePieChart(allTransactions, total, setCategoryPercent){
    const cache = {};
    for (let i = 0; i < allTransactions.length; i++) {
      if (!cache[allTransactions[i].category]) {
        cache[allTransactions[i].category] = Number(allTransactions[i].amount);
      } else cache[allTransactions[i].category] += Number(allTransactions[i].amount);
    }
    // cache['savings']
    // { Gas: 300, Savings 5000,}
    const obj = {
      "Housing/Rent": 0,
      "Utilities": 0,
      "Gas": 0,
      "Groceries": 0,
      "Dining Out": 0,
      "Drinks": 0,
      "Entertainment": 0,
      "Savings": 0,
      "Other": 0,
    };
    // second obj { savings, Big Purchance value}
    for (const property in cache) {
      // if property = savings then we update our savings state, or savings perectent state 
      obj[property] = (cache[property] / total) * 100;
    }
    // console.log(obj)
    setCategoryPercent([obj["Housing/Rent"], obj["Utilities"], obj["Gas"], obj["Groceries"], obj["Dining Out"], obj["Drinks"], obj["Entertainment"], obj["Savings"], obj["Other"]]);
  },

}

export default utils;