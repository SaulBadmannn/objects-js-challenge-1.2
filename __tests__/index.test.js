import test from 'node:test';
import assert from 'assert/strict';

import dnaToRna from '../index.js'

test('step1', () => {
    const result = dnaToRna('ACGTGGTCTTAA');
    const expected = 'UGCACCAGAAUU';
    assert.strictEqual(result, expected);
});

test('step2', () => {
    const result = dnaToRna('CCGTA');
    const expected = 'GGCAU';
    assert.strictEqual(result, expected);
});

test('step3', () => {
    const result = dnaToRna('');
    const expected = '';
    assert.strictEqual(result, expected);
});

test('step4', () => {
    const result = dnaToRna('ACNTG');
    assert.strictEqual(result, null);
});
