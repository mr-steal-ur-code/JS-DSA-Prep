function longestWord(str) {
    let words = str.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(longestWord("Harry is a Wizard who belongs to Gryffindor House"));