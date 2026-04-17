import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common'; // Essencial para o pipe funcionar

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe], // Essencial para o pipe funcionar
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})


export class Produto {
  nome = 'Produto Exemplo';
  preco = 149.99;
  mostrarPreco = true; // teste alternando entre false/true

  produtos = [
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Mouse',    preco: 150  },
    { nome: 'Teclado',  preco: 250  }
  ];

}


