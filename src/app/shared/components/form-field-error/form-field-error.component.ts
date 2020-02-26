import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  public get errorMessage(): string | null {
    if( this.mustShowMessageError() ) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  private mustShowMessageError(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if( this.formControl.errors.required ) {
      return "Dado obrigatório!";
    } else if( this.formControl.errors.minlength ) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracteres`;
    } 
    // daqui pra baixa não é utilizado, mas fica como exemplo
    else if( this.formControl.errors.maxlength ) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracteres`;
    } else if( this.formControl.errors.email ) {
      return 'Formato de email inválido';
    }
  }
}
