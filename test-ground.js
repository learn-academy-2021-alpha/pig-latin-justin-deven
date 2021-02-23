// let translatedWordsArray = userInput.map(currentWord => {
//     // ACTION ITEM: use "currentWord" as a starting point for your code
//     console.log("currentWord:", currentWord)
// var randoWord= ("this is an apple")
// let vowelsArray = randoWord.split("").filter(vowel => {
//     return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
// })
//     console.log(vowelsArray)

var test = "alpha through yummy squeal queen fry"

    myPigLatinCodeHere = () => {
        // the variable "userInput" will contain the text input from the user modified into an array of words
        // no need to change this variable
        let userInput = test.split(" ") 
        console.log("userInput:", userInput)
    
        // already split words into array of single letters
        // userInput = ["alpha", "through" , "yummy" , "squeal", "queen", fry"]
        // ["a","t","y","s","q","f"]
        // ["a"]
    
        // now that we have an array of words, we can map over the array and access each word
        let translatedWordsArray = userInput.map(currentWord => {
            //mapping the strings and taking out the indexes so that we may be able to analyze further
            // map to access each word... what are we accessing? index of the first vowel aka ID the first vowel
            // if index [0] = 
           return currentWord.substring(0,) 
            })

            console.log( translatedWordsArray(currentWord))
        //   console.log("currentWord:", currentWord) 

        }
    
        //   let vowelsArray = currentWord.split("").filter(vowel => {
        //     return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
        //   })
        //   console.log("vowelsArray:", vowelsArray)