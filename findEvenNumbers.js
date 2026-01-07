function findEvenNumbers(arr) {
    const evenNums = [];
    for (const i of arr) {
        if (i % 2 === 0) {
            evenNums.push(i);
        }
    }
    return evenNums;
};