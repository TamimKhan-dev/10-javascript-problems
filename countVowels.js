function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (const i of vowels) {
        if (str.includes(i)) {
            count++;
        }
    }
    return count;
};