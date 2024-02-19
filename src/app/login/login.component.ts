import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import { PipeDemoComponent } from '../pipe-demo/pipe-demo.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],//PipeDemoComponent
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
show : boolean = false;
age:any;
color:string='';
num1:number=10;
num2:number=5;
num3:number=27
weekdayName:string  ="";




n:any
divNums:any 
colorNums:any 
}
