import { Exame } from '/object.js';


const peso = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const resposta = {
  pessoa: 'Professor',
  valores: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

const exame = new Exam(resposta, peso);

exame.add({
  aluno: 'Alice',
  valores: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

console.log(exame.avg()); 
console.log(4);

console.log(exame.min()); 
console.log([4]);

console.log(exame.max());  
console.log([4]);

console.log(exame.lt(7));  
console.log([4]);

console.log(exame.gt(7));  
console.log([]);

exame.add({
  aluno: 'Bob',
  valores: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
});

console.log(exame.avg());  
console.log(6);

console.log(exame.min());  
console.log([4]);

console.log(exame.max());  
console.log([8]);

console.log(exame.lt(7));  
console.log([4]);

console.log(exame.gt(7));  
console.log([8]);
