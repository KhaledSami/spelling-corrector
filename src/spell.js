var HashMap = require('hashmap');
var fs = require('fs');

var spellCorrector = function() {
    this.nWords = new HashMap();
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

module.exports.spellCorrector = spellCorrector;