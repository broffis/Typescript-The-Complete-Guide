"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from "./Sorter";
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([-10, 30, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(sorter.collection)
console.log(numbersCollection.data);
var characterCollection = new CharactersCollection_1.CharactersCollection('aXekFa');
// const strSorter = new Sorter(characterCollection)
// strSorter.sort()
// console.log(strSorter.collection)
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const linkedSorter = new Sorter(linkedList);
// linkedSorter.sort();
// linkedList.print();
linkedList.sort();
linkedList.print();
