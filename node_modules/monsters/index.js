var jsonfile = require('jsonfile');

// TODO: Lazy load.
var srdMonsters = jsonfile.readFileSync(__dirname + '/data/srd-monsters.json');
var lovecraftMonsters = jsonfile.readFileSync(__dirname + '/data/lovecraft.json');
var pokemon = jsonfile.readFileSync(__dirname + '/data/pokemon.json');
var zelda = jsonfile.readFileSync(__dirname + '/data/zelda.json');
var animals = jsonfile.readFileSync(__dirname + '/data/animals.json');

module.exports = {
  srd: srdMonsters,
  lovecraft: lovecraftMonsters,
  pokemon: pokemon,
  zelda: zelda,
  animals: animals
};
