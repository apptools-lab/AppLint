import { describe } from 'vitest';

const { defineTest } = require('jscodeshift/dist/testUtils');
const { defineInlineTest } = require('jscodeshift/dist/testUtils');
const { defineSnapshotTest } = require('jscodeshift/dist/testUtils');
const transform = require('../reverse-identifiers');

defineTest(__dirname, 'reverse-identifiers');

// defineTest(__dirname, 'reverse-identifiers', null, 'typescript/reverse-identifiers', { parser: 'ts' });

describe('reverse-identifiers', () => {
  defineInlineTest(transform, {}, `
var firstWord = 'Hello ';
var secondWord = 'world';
var message = firstWord + secondWord;`, `
var droWtsrif = 'Hello ';
var droWdnoces = 'world';
var egassem = droWtsrif + droWdnoces;
  `);
  defineInlineTest(transform, {},
    'function aFunction() {};',
    'function noitcnuFa() {};',
    'Reverses function names',
  );
});

// the snapshot output of this file should be the same as reverse-identifiers.output.js
defineSnapshotTest(transform, {}, 'reverse-identifiers');