// Anagram checker
const anagramChecker = (str1, str2) =>{
    if(str1.length != str2.length)
        return false
    return str1.toLowerCase().split("").sort().join("") == str2.toLowerCase().split("").sort().join("")
}

console.log(anagramChecker("listen", "silent"))
console.log(anagramChecker("evil", "Vile"));
console.log(anagramChecker("check", "katel"));
console.log(anagramChecker("check","kate"));


