function someSums (array, sum, num, subArray=[]) {
  let sub = subArray.slice();
  sub.push(array[0]);
  if (sub.length === num && getSum(sub) === sum) {
    return sub;
  }
  for (let i=1; i<array.length; i++){
    let result = someSums(array.slice(i), sum, num, sub);
    if (result) return result;
  }
  return false;
}

function getSum(arr){
  return arr.reduce((sum, num)=>sum+num);
}

someSums([-1,-6,-2,-10,4,5, -1, -10, 1,-2], -10, 3)










