// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-10, 30, -5, 0])
numbersCollection.sort()
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(sorter.collection)
console.log(numbersCollection.data)

const characterCollection = new CharactersCollection('aXekFa');
// const strSorter = new Sorter(characterCollection)
// strSorter.sort()
// console.log(strSorter.collection)
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const linkedSorter = new Sorter(linkedList);
// linkedSorter.sort();
// linkedList.print();

linkedList.sort();
linkedList.print();
