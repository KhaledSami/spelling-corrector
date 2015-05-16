var HashMap = require('hashmap');
var fs = require('fs');

var spellCorrector = function() {
    this.nWords = new HashMap();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
}

spellCorrector.prototype.loadDict = function(dictPath) {
    dictPath = dictPath || '../dictonary/big.txt';
    var file = fs.readFileSync(dictPath).toString().toLowerCase();
    var regex = /[a-z]+/g;
    var match, word;
    while ((match = regex.exec(file))) {
        word = match[0];
        var newCount = 1;
        if (this.nWords.has(word)) {
            newCount = newCount + this.nWords.get(word);
        }
        this.nWords.set(word, newCount);
    }
}

spellCorrector.prototype.getEdits = function(word) {
    var result = [];
    for (var i = 0; i < word.length; i++) result.push(word.slice(0, i) + word.slice(i + 1));
    for (var i = 0; i < word.length - 1; i++) result.push(word.slice(0, i) + word.slice(i + 1, i + 2) + word.slice(i, i + 1) + word.slice(i + 2));
    for (var i = 0; i < word.length; i++)
        for (var j = 0; j < this.alphabet.length; j++) result.push(word.slice(0, i) + this.alphabet[j] + word.slice(i + 1));
    for (var i = 0; i < word.length; i++)
        for (var j = 0; j < this.alphabet.length; j++) result.push(word.slice(0, i) + this.alphabet[j] + word.slice(i));
    return result;
}

module.exports.spellCorrector = spellCorrector;