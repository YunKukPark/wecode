const findEvenNumberInOnetoFifty = () => {
  let arr = [];
  for(i = 1; i <= 50; i++ ){
    arr.push(i);
  }

  return arr.filter((num) => num % 2 === 0 );
}
