// let translatedWordsArray = userInput.map(currentWord => {
//     // ACTION ITEM: use "currentWord" as a starting point for your code
//     console.log("currentWord:", currentWord)
var randoWord= ("this is an apple")
let vowelsArray = randoWord.split("").filter(vowel => {
    return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
})
    console.log(vowelsArray)