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

    test("loadDictionary function should construct a hashmap from the passed dictionary", function() {
    	this.timeout(40000);
        spellCorrector.loadDictionary();
        var nWords = spellCorrector.nWords;
        assert.equal(nWords.get("the"), 80030);
    });

    test("getEdits function should generate all possible correction strings from a passed word", function() {
        var expectedNumberOfCombination = function(n) {
            return 54 * n + 25;
        }
        var editWords = spellCorrector.getEdits("xy");
        assert.equal(editWords.length, expectedNumberOfCombination(2));

        editWords = spellCorrector.getEdits("aaa");
        assert.equal(editWords.length, expectedNumberOfCombination(3));

    });
    test("getEdits function should not generate invalid correction strings from a passed word", function() {
        var editWords = spellCorrector.getEdits("xy");
        assert.notEqual(editWords.indexOf("xyz"), -1);
        assert.equal(editWords.indexOf("axyz"), -1);
        assert.equal(editWords.indexOf("xy1"), -1);
    });

    test("correct function should return the correction for the passed word", function() {
        spellCorrector.loadDictionary();
        this.timeout(40000);
        var set1 = {
            'access': 'acess',
            'accommodation': 'accomodation',
            'forbidden': 'forbiden',
            'decisions': 'deciscions',
            'decisions': 'descisions',
            'supposedly': 'supposidly',
            'cart': 'catt',
            'address':'addres',
            'member':'rember'
        }
        for (var key in set1) {
            if (set1.hasOwnProperty(key)) {
                var expected = key;
                var bad = set1[key];
                var correctedWord = spellCorrector.correct(bad);
                assert.equal(correctedWord, expected);
            }
        }
    });

});