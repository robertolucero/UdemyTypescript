import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollections } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollections('Xaayb');
// const sorter = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);