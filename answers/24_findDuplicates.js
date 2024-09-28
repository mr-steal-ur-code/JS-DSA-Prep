function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) duplicates.add(num);
        else seen.add(num);
    }
    return Array.from(duplicates);
}
console.log(findDuplicates([21,20,21,45,90,45]));
