![alt tag](https://travis-ci.org/KhaledSami/spelling-corrector.svg?branch=master)
# spelling-corrector
nodeJs Spelling Corrector version for Norvig's spelling corrector

# How to install

npm i spelling-corrector

# How to use 
```javascript

var SpellCorrector = require('spelling-corrector');

var spellCorrector = new SpellCorrector();

// you need to do this step only one time to load the Dictionary
spellCorrector.loadDictionary();

console.log(spellCorrector.correct('sucess'));

console.log(spellCorrector.correct('spel'));
```
