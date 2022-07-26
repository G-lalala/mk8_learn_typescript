import {Item} from './item';

var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',2300);
aBook.say(elem);