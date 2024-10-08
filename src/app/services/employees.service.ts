import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeResponseDto } from '../model/dto/employees-dto';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesEndpoint = environment.employeesUrl;
  private employeeEndpoint = environment.employeeUrl;

  constructor(private http: HttpClient) { }
  
  getEmployees() : Observable<EmployeeResponseDto[]> {
    return this.http.get<EmployeeResponseDto[]>(this.employeesEndpoint);
  }

  getEmployee(id: number) : Observable<EmployeeResponseDto> {
    return this.http.get<EmployeeResponseDto>(this.employeeEndpoint.replace("{id}", id.toString()));
  }

}
