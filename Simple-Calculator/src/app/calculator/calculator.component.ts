import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';
  keys = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: ' / ', value: '/' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: ' * ', value: '*' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: ' - ', value: '-' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: ' + ', value: '+' },
  ];

  appendToExpression(value: string) {
    this.expression += value;
  }

  calculate() {
    try {
      const result = eval(this.expression);
      this.expression = result.toString();
    } catch (error) {
      this.expression = 'Error';
    }
  }

  clear() {
    this.expression = '';
  }
}
