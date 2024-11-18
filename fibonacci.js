//LeetCode 509 https://leetcode.com/problems/fibonacci-number/description/
// Using Recursion 
const fib = function(n, sum=0) {
    if(n==0) return 0;
    if(n<=2) return 1;
    sum += fib(n-1,sum)+fib(n-2, sum);
    return sum
};

console.log(fib(3))

//Optimize solution
  const memo = {};
  function fib(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (!memo[n]) {
      memo[n] = fib(n - 1) + fib(n - 2);
    }
    return memo[n];
  }
console.log(fib(10)); 

//space optimize
const fib  = function(n){
    let secondLast = 0;
    let firstLast=1;
    for(let i=2;i<=n;i++){
        let temp = firstLast;
        firstLast+=secondLast;
        secondLast=temp;
    }
    return firstLast
}
fib(3);
