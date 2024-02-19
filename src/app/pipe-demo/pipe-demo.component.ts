import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { StudentformComponent } from "../studentform/studentform.component";

interface Movie {
  title: string;
  director: string;
  ticketCost: number;
  releaseDate: string;
}

interface Student {
  id: number;
  name: string;
  marks: number;
}


@Component({
    selector: 'app-pipe-demo',
    standalone: true,
    templateUrl: './pipe-demo.component.html',
    styleUrl: './pipe-demo.component.css',
    imports: [ CommonModule, FormsModule] //HomeComponent,, StudentformComponent
})
export class PipeDemoComponent {
// eid:any;
// ename:string="";
//   age :any;
//   salary:any;
//   color:string="";

  // employee:any[]=[];
   
  employees: any[] = [
    { eid: 101, ename: 'Prashant Kale', salary: 50000 },
    { eid: 102, ename: 'Sahil Rane', salary: 60000 },
    { eid: 103, ename: 'Mohan Auti', salary: 55000 }
  ];

  newEmployee: any = {
    eid: '',
    ename: '',
    salary: ''
  };

  constructor() { }

  addEmployee(): void {
    if (this.newEmployee.eid && this.newEmployee.ename && this.newEmployee.salary) {
      this.employees.push({
        eid: this.newEmployee.eid,
        ename: this.newEmployee.ename,
        salary: this.newEmployee.salary
      });
      this.clearInputs();
    } else {
      alert('Please fill in all fields');
    }
  }

  clearInputs(): void {
    this.newEmployee.eid = '';
    this.newEmployee.ename = '';
    this.newEmployee.salary = '';
  }


  //
num =25.5;
currentDate=new Date();

  
movies: Movie[] = [
  { title: "Inception", director: "Christopher Nolan", ticketCost: 299, releaseDate: "2010-07-16" },
  { title: "Interstellar", director: "Christopher Nolan", ticketCost: 199, releaseDate: "2014-11-07" },
  { title: "The Shawshank Redemption", director: "Frank Darabont", ticketCost: 350, releaseDate: "1994-09-23" },
  { title: "The Dark Knight", director: "Christopher Nolan", ticketCost: 250, releaseDate: "2008-07-18" },
  { title: "Pulp Fiction", director: "Quentin Tarantino", ticketCost: 500, releaseDate: "1994-10-14" }
];

// Method to check if the index is even
isOdd(index: number): boolean {
  return index % 2 == 0;
}

//Q2
students: Student[] = [
  { id: 1, name: 'Prashant', marks: 75 },
  { id: 2, name: 'Ishawar', marks: 80 },
  { id: 3, name: 'Mohan', marks: 55 },
  { id: 4, name: 'Vishal', marks: 90 },
  { id: 5, name: 'Rakesh', marks: 65 }
];

}
