import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common'; // Essencial para o pipe funcionar
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';


@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe], // Essencial para o pipe funcionar
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


