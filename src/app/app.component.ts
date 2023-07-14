import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  expression: string = '';

  onClickValue(val: string, type: string) {
    if (type === 'number') {
      this.expression += val;
    } else if (type === 'function') {
      this.expression += val;
  
      if (val === 'c') {
        this.clearAll();
      } else if (val === '=') {
        this.calculateResult();
      }
    }
  }

  calculateResult() {
    try {
      //remove =
      const expressionWithoutEquals = this.expression.replace('=', '');
      const result = this.evaluateExpression(expressionWithoutEquals);

      // save sxpression as string
      this.expression = result.toString();
    } catch (error) {
      console.error('Ungültiger Ausdruck', error);
      this.expression = 'Error';
    }
  }
  
  
  evaluateExpression(expression: string): number {
    //Function ist der Konstruktor für eine neue Funktion in JavaScript
    //Die übergebene Zeichenkette expression wird in den Funktionskörper eingefügt und sein wert returned:
    return Function(`"use strict"; return (${expression});`)();
    //die Function wertet die expressin aus - statt eval()
  }


  clearAll() {
    this.expression = '';
}
}
