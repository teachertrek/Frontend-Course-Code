console.log("js");

function fib(n) {
    if(n<=1)
        return n
    return fib(n-1) + fib(n-2)

}
console.time();

console.log(fib(20));
console.timeEnd();


function fibWithMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibWithMemo(n - 1,memo) + fibWithMemo(n - 2,memo);
  return memo[n];
}
console.time();

console.log(fibWithMemo(20));
console.timeEnd();

