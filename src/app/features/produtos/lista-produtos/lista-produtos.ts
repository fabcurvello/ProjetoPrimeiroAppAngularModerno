import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {

  // SIGNALS  
  // --- Estado do Catálogo ---
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 }
  ]);

  produtoSelecionado = signal<string | null>(null);

  // --Estado do Carrinho ---
  carrinho = signal<{ nome: string; preco: number }[]>([]);
  
  // COMPUTED

  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos()
    .reduce((total, item) => total + item.preco, 0);
  });

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => {
    return this.carrinho().reduce((total, item) => total + item.preco, 0);
  });

  constructor() {
    effect(() => {
      console.log('Lista de produtos alterada:', this.produtos());
    });

    effect(() => {
      console.log('Valor total atualizado:', this.valorTotal());
    });

    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
  }
  
  exibirProduto(nome: string) {
    //console.log('Produto selecionado:', nome);
    this.produtoSelecionado.set(nome);
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

  adicionarAoCarrinho(produto: { nome: string; preco: number }) {
    this.carrinho.update(listaAtual => [
      ...listaAtual,
      produto
    ]);
  }

}
