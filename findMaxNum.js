function findMaxNum(arr) {
    let maxNum = 0;
    for (const i of arr) {
        if (i > maxNum) maxNum = i;
    }
    return maxNum;
};
