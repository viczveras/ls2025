// Importa as funções de teste do Node e o módulo assert para as asserções
import { describe, it } from 'node:test';
import assert from 'node:assert';


import { sum, product, sumOdds } from './array-operations.js';

describe('Operações de Array', () => {
  describe('sum()', () => {
    it('deve retornar NaN se a entrada não for um array', () => {
      assert.equal(sum(1, 2, 3), NaN);
      assert.equal(sum(2, 2, 2), NaN);
      assert.equal(sum(1, 2, 3, 4, 5, 6), NaN);
    });

    it('deve retornar a soma dos valores do array', () => {
      assert.equal(sum([1, 2, 3]), 6);
      assert.equal(sum([2, 2, 2]), 6);
      assert.equal(sum([1, 2, 3, 4, 5, 6]), 21);
    });
  });

  describe('sumOdds()', () => {
    it('deve retornar NaN se a entrada não for um array', () => {
      assert.equal(sumOdds(1, 2, 3), NaN);
      assert.equal(sumOdds(2, 2, 2), NaN);
      assert.equal(sumOdds(1, 2, 3, 4, 5, 6), NaN);
    });

    it('deve retornar a soma dos valores ímpares do array', () => {
      assert.equal(sumOdds([1, 2, 3]), 4);       
      assert.equal(sumOdds([2, 2, 2]), 0);          
      assert.equal(sumOdds([1, 2, 3, 4, 5, 6]), 9);  
    });
  });

  describe('product()', () => {
    it('deve retornar NaN se a entrada não for um array', () => {
      assert.equal(product(1, 2, 3), NaN);
      assert.equal(product(2, 2, 2), NaN);
      assert.equal(product(1, 2, 3, 4, 5, 6), NaN);
    });

    it('deve retornar o produto dos valores do array', () => {
      assert.equal(product([1, 2, 3]), 6);
      assert.equal(product([2, 2, 2]), 8);
      assert.equal(product([1, 2, 3, 4, 5, 6]), 720);
    });
  });
});
