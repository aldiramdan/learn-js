const reverseWord = (x) => {
    const words = x.split(" ")
    console.log(words)
    const revWords = words.reverse()
    console.log(revWords)
    return revWords.join(" ")
}
console.log(reverseWord("Saya Belajar Javascript"));