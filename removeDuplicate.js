function removeDuplicate(arr) {
    const uniqueArr = [];
    for (const i of arr) {
        if (!uniqueArr.includes(i)) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
};