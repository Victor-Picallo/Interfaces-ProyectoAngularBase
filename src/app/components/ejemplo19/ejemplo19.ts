import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo19',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo19.html',
  styleUrl: './ejemplo19.css',
})
export class Ejemplo19 {

  formBuilder = inject(FormBuilder);

  form: FormGroup = new FormGroup({
});

  ngOnInit() {
    this.form = this.formBuilder.group({
      nomnbre: ['Juan', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]]
    })
  }
  handleSubmit() {
    alert("Me has enviado los datos correctamente");
  }
}
