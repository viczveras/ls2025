import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { Exame } from '/object.js';

describe('Ferramenta de Exame', () => {
  let exame;

  beforeEach(() => {
    const peso = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

    const resposta = {
      person: 'Professor',
      values: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    };

    exame = new Exam(resposta, peso);
  });

  it('deve calcular a média corretamente', () => {
    exame.add({
      student: 'Alice',
      values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
    });
    assert.equal(exame.avg(), 4);

    exame.add({
      student: 'Bob',
      values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    });
    assert.equal(exame.avg(), 6);
  });

  it('deve calcular o valor mínimo corretamente', () => {
    exame.add({
      student: 'Alice',
      values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
    });
    exame.add({
      student: 'Bob',
      values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    });
    assert.deepEqual(exame.min(), [4]);
  });

  it('deve calcular o valor máximo corretamente', () => {
    exame.add({
      student: 'Alice',
      values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
    });
    exame.add({
      student: 'Bob',
      values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    });
    assert.deepEqual(exame.max(), [8]);
  });

  it('deve retornar as notas menores que um determinado valor', () => {
    exame.add({
      student: 'Alice',
      values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
    });
    exame.add({
      student: 'Bob',
      values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    });
    assert.deepEqual(exame.lt(7), [4]);
  });

  it('deve retornar as notas maiores que um determinado valor', () => {
    exame.add({
      student: 'Alice',
      values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
    });
    exame.add({
      student: 'Bob',
      values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
    });
    assert.deepEqual(exame.gt(7), [8]);
  });
});
