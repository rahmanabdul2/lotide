const tail = require('../tail');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual'); // do not need this anymore

const result = tail(["Hello", "Lighthouse", "Labs"]); // First we provided an array for the tails
