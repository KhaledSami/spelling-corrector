var SpellCorrector = require('./src/spell.js').spellCorrector;

var spellCorrector = new SpellCorrector();

spellCorrector.loadDict();

console.log(spellCorrector.correct("spel"));

