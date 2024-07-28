const reverseString = function(sentence) {
    let sentenceArray = sentence.split("");
    let sentenceArrayReverse = sentenceArray.reverse();
    return sentenceArrayReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
