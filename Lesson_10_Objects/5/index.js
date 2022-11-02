sum = (...rest) => rest.reduce((sum, iter) => sum + iter);
console.log(sum(1, 2, 3, 4, 5));
