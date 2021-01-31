const reverseSentense = sentense => {
    const newArray = [];
    for (let i = 0; i < sentense.length; i++) {
        newArray[sentense.length - i] = sentense[i];
    }
    return newArray.join("");
}

console.log(reverseSentense("abc"))