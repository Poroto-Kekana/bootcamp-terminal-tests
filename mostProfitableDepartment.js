export default function mostProfitableDay (data) {
    var dayMap = {};
    for ( let Day in data) {
      var dayList = data[Day];
      dayMap[dayList.day] = 0;
    }
    for (let total in data) {
      var totalList = data[total];
      var finalTotal = dayMap[totalList.day];
      finalTotal += totalList.sales;
      dayMap[totalList.day] = finalTotal;
      //console.log(dayMap)
    }
    var count = 0
    var profitableDay = "";
    for (let sales in dayMap) {
      var mostSales = dayMap[sales];
      if (mostSales > count) {
        count = mostSales;
        profitableDay = sales;
      }
    }
    return profitableDay
}