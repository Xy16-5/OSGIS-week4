// =====================================================
// Performant, recursive fun with underscore.js
// =====================================================

// The fibonnacci sequence (SLOW)
var fib = function(n) {
    if (n < 2) {
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
  
  // The fibonnacci sequence (memoized means it saves results!)
  var fibonacci = _.memoize(function(n) {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  });
  