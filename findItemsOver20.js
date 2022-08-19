module.export = function findItemsOver20(itemList) {
    var sum = [];
  for (var i = 0; i < itemList.length; i++) {
    var item = itemList[i];
   //console.log(item.qty > 20)
   if ( item.qty > 20 ) {
     sum.push(item)
   }
  }
    return sum
}