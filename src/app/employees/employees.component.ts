import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { EmployeeResponseDto } from '../model/dto/employees-dto';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  data: EmployeeResponseDto[] = [];

  submitForm = this.formBuilder.group({
    idemployee: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService) { }

  onSubmit() {
    if (this.submitForm.valid) {
      let formData = this.submitForm.value;

      const idemployee = formData.idemployee;

      if (idemployee !== null && idemployee !== '') {
        this.employeesService.getEmployee(Number(idemployee)).subscribe(
          (response) => {
            this.data = [];
            this.data.push(response);
          },
          (error) => {
            console.error('Error fetching data', error); // Handle error
          }
        );
      } else {
        this.employeesService.getEmployees().subscribe(
          (response) => {
            this.data = response;
          },
          (error) => {
            console.error('Error fetching data', error); // Handle error
          }
        );
      }
    }
  }

  formatValue(price: number) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
    });
    return USDollar.format(price);
  }

}
