import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {
  
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 }
  ]);

  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }

  // update() modifica baseado no estado atual
  adicionarProduto() {
    this.produtos.update(listaAtual => [
      ...listaAtual, 
      { nome: 'Teclado', preco: 250 }
    ]);
  }

  // set() substitui completamente
  substituirProdutos() {
     this.produtos.set([
      { nome: 'Produto novo', preco: 999 } 
    ]);
  }
}
