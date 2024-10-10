export class EmployeeResponseDto {

    id: number;
    imageUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    age: number;
    dob: string;
    address: string;
    salary: number;
    annualSalary: number;

    constructor(id: number, imageUrl: string, firstName: string, lastName: string, email: string, contactNumber: string, age: number, dob: string, address: string, salary: number, annualSalary: number) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.age = age;
        this.dob = dob;
        this.address = address;
        this.salary = salary;
        this.annualSalary = annualSalary;
    }

}
