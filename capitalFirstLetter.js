function capitalFirstLetter(str) {
    const strArr = str.split(' ');
    const finalArr = [];
    for (const i of strArr) {
        const capitalWord = i.slice(0, 1).toUpperCase() + i.slice(1, i.length);
        finalArr.push(capitalWord);
    }
    return finalArr.join(' ');
};