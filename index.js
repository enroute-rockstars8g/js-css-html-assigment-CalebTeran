function fibo() {
  const fiboNumber = parseInt(document.getElementById("fibo-number").value);
  console.log('Input Number>>>'+fiboNumber);
  const fiboResult = fibonacciSequence(fiboNumber);
  console.log('Fibonaci Result>>>'+fiboResult);
  document.getElementById("fibo-result").innerHTML = fiboResult.toString();
}

function exponencial(){
  const expNumber = parseInt(document.getElementById("exp-number").value);
  console.log('Input Exp Number>>>'+expNumber);
  const expResult = Math.pow(expNumber, expNumber);
  console.log('Exponencial Result>>>'+expResult);
  document.getElementById("exp-result").innerHTML = expResult.toString();
}
function fibonacciSequence(fibNum) {
  if (fibNum <= 1) return 1;
  return fibonacciSequence(fibNum - 1) + fibonacciSequence(fibNum - 2);
}