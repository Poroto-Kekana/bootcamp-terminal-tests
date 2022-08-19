export default function countAllFromTown (regNum, Loc) {
    let counter = 0;
    var regNumbers = regNum.split(',');
    for (var i = 0; i < regNumbers.length; i++) {
      var allFromTown = regNumbers[i].trim();
      if (allFromTown.startsWith(Loc)) {
        counter++
      }
    }
    return counter
}