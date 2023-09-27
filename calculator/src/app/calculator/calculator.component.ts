import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  currentNumber = '0'; // Almacena el número actual que se muestra en la pantalla
  firstOperand: number | null = null; // Almacena el primer operando en una operación
  operator: string | null = null; // Almacena el operador seleccionado
  waitForSecondNumber = false; // Indica si se debe esperar el segundo número en una operación

  // Función para obtener y mostrar números en la pantalla
  getNumber(v: string): void {
    if (this.waitForSecondNumber) {
      // Si se espera el segundo número, reemplaza el número actual con el nuevo número
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      // Si no se espera el segundo número, concatena el número al número actual
      this.currentNumber === '0'
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
  }

  // Función para agregar un punto decimal al número actual
  getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      // Agrega un punto decimal solo si no está presente ya
      this.currentNumber += '.';
    }
  }

  // Función para gestionar las operaciones
  getOperation(op: string): void {
    if (this.firstOperand === null) {
      // Si el primer operando aún no está establecido, establece el número actual como el primer operando
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      // Si ya hay un operador seleccionado, realiza un cálculo utilizando el operador actual
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    // Establece el nuevo operador y marca que se debe esperar el segundo número
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  // Función para reiniciar la calculadora (borrar todo)
  clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  // Función para realizar cálculos basados en el operador y los operandos
  doCalculation(op: string, secondOp: number): number {
    if (this.firstOperand !== null) {
      switch (op) {
        case '+':
          return this.firstOperand + secondOp;
        case '-':
          return this.firstOperand - secondOp;
        case '*':
          return this.firstOperand * secondOp;
        case '/':
          return this.firstOperand / secondOp;
        case '=':
          return secondOp;
        default:
          return secondOp;
      }
    } else {
      return secondOp;
    }
  }
}
