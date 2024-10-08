export class EmployeeResponseDto {

    id: number;
    name: string;
    salary: number;
    annualSalary: number;

    constructor(id: number, name: string, salary: number, annualSalary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.annualSalary = annualSalary;
    }

}
