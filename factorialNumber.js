function factorialNumber(n) {
    if (n === 0 || n === 1) return 1;
    
    const num = factorialNumber(n - 1) * n;
    return num;
};