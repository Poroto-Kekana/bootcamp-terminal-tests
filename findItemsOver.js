export default function findItemsOver(itemList, threshold) {
    var sum = [];
  for (var i = 0; i < itemList.length; i++) {
    var item = itemList[i];
   //console.log(item.qty > 20)
   if ( item.qty > threshold ) {
     sum.push(item);
   }
  }
    return sum
}
  