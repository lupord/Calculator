import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { AppModule } from '../app.module';

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let component: CalculatorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [AppModule],
    });

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente de la calculadora', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar números correctamente', () => {
    // Prueba la funcionalidad de agregar números y realizar una suma
    component.getNumber('5');
    component.getOperation('+');
    component.getNumber('3');
    component.getOperation('=');
    // Verifica si el resultado es correcto
    expect(component.currentNumber).toEqual('8');
  });

  it('debería restar números correctamente', () => {
    // Prueba la funcionalidad de restar números
    component.getNumber('9');
    component.getOperation('-');
    component.getNumber('4');
    component.getOperation('=');
    // Verifica si el resultado es correcto
    expect(component.currentNumber).toEqual('5');
  });

  it('debería multiplicar números correctamente', () => {
    // Prueba la funcionalidad de multiplicar números
    component.getNumber('6');
    component.getOperation('*');
    component.getNumber('7');
    component.getOperation('=');
    // Verifica si el resultado es correcto
    expect(component.currentNumber).toEqual('42');
  });

  it('debería dividir números correctamente', () => {
    // Prueba la funcionalidad de dividir números
    component.getNumber('8');
    component.getOperation('/');
    component.getNumber('2');
    component.getOperation('=');
    // Verifica si el resultado es correcto
    expect(component.currentNumber).toEqual('4');
  });

  it('debería manejar el punto decimal', () => {
    // Prueba la funcionalidad de agregar un punto decimal
    component.getDecimal();
    component.getNumber('3');
    // Verifica si el número con punto decimal es correcto
    expect(component.currentNumber).toEqual('0.3');
  });

  it('debería borrar la calculadora', () => {
    // Prueba la funcionalidad de borrar la calculadora
    component.getNumber('5');
    component.getOperation('+');
    component.getNumber('3');
    component.clear();
    // Verifica si los valores se han restablecido correctamente
    expect(component.currentNumber).toEqual('0');
    expect(component.firstOperand).toBeNull();
    expect(component.operator).toBeNull();
    expect(component.waitForSecondNumber).toBeFalsy();
  });
});
