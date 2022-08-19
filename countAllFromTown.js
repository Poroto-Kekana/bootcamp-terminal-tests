export default function countAllFromTown (regNum, Loc) {
    let counter = 0;
    let regNumbers = regNum.split(',');
    for (var i = 0; i < regNumbers.length; i++) {
      var allFromTown = regNumbers[i].trim();
      if (allFromTown.startsWith(Loc)) {
        counter++
      }
    }
    return counter
}