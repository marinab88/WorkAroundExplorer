const formatNumber = (number) => {
  let num = String(Math.floor(number));
  let newNum = "";
  for ( let i=num.length - 3; i > 0; i -= 3) {
    newNum  = num.slice(0, i) + "," + num.slice(i);
    num = newNum;
  }

  return newNum;

};

export default formatNumber;