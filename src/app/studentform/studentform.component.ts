import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-studentform',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css'
})
export class StudentformComponent {
  
  data:string="";
  data1: any;
  data2: any;
  data3: any;

  dat1:any;
  dat2:any;
  dat3:any;
  
  addEmployee(): void {
    this.dat1=this.data1
    this.dat2=this.data2
    this.dat3=this.data3
  }

}
