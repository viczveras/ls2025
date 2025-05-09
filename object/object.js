export class Exame {
    constructor(resposta, peso) {
      this.peso = peso;
      this.resposta = resposta;
      this.exames = [];
    }
  
    add(exame) {
      exame.nota = Object.keys(exame.valores).reduce((total, questao) => {
        return total + (exame.valores[questao] === this.resposta.valores[questao] ? this.peso[questao] : 0);
      }, 0);
  
      this.exames.push(exame);
    }
  
    avg() {
      let soma = this.exames.reduce((acumulador, exame) => acumulador + exame.nota, 0);
      return soma / this.exames.length;
    }
  
    min(qtd = 1) {
      let notas = this.exames.map((exame) => exame.nota);
      notas.sort((a, b) => a - b);
      return notas.slice(0, qtd);
    }
  
    max(qtd = 1) {
      let notas = this.exames.map((exame) => exame.nota);
      notas.sort((a, b) => a - b);
      return notas.slice(-qtd);
    }
  
    lt(limite) {
      let notas = this.exames.map((exame) => exame.nota);
      notas.sort((a, b) => a - b).reverse();
      return notas.filter((nota) => nota < limite);
    }
  
    gt(limite) {
      let notas = this.exames.map((exame) => exame.nota);
      notas.sort((a, b) => a - b).reverse();
      return notas.filter((nota) => nota > limite);
    }
  }
  