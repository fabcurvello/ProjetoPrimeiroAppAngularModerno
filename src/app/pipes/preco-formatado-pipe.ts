import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precoFormatado',
})
export class PrecoFormatadoPipe implements PipeTransform {

  transform(valor: number): string {
  return 'R$ ' + valor.toFixed(2);
}

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */
}
