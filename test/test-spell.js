var assert = require('assert');
var SpellCorrector = require('../src/spell.js').spellCorrector;

suite("Spell Corrector", function() {

    var spellCorrector;

    setup(function() {
        spellCorrector = new SpellCorrector();
    });

    test("the spellCorrector dictionary should be empty", function() {
        assert.equal(spellCorrector.nWords.count(), 0);
    });

    test("should construct a hashmap from the passed dictionary", function() {
        spellCorrector.loadDict('./dictionary/small.txt');
        var nWords = spellCorrector.nWords;
        assert.equal(nWords.get("the"), 2);
    });
});