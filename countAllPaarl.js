export default function allPaarl (regNumbers) {
    //var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
      let count = [];
      var newRegNumber = regNumbers.split(',');
      
      for( var i = 0; i < newRegNumber.length; i++) {
        const rg = newRegNumber[i].trim();
        if (rg.startsWith("CJ")) {
          count.push(rg);
        }
      }
      return count;
}