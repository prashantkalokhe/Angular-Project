import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { LoginComponent } from '../login/login.component';
import { FormsModule,NgForm } from '@angular/forms';
// import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HomeComponent,CommonModule],//LoginComponent,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name='Prashant';


  hovervar='Hover from ts file'; 

  alertMe(){
     alert('Button clicked');
  }

  alertInput(){
     alert('Input Key Press');
  }
  alertValue(event:any){
    alert(event.target.value);
 }
 data:string=''

 getData():string{
   return 'This is Interpolation'
 }
 
msg:string='Hi';

 onMyClick(){
  this.msg=this.msg+" "+'I am Coder event';
}
data1:string="";

 imageUrl='https://files.techmahindra.com/static/img/future-of-artificial-intelligence-tl-thumbnail.jpg';

 form={
  fullName:"",
  username:"",
  email:"",
  password:"",
  acceptTerms:false
}

OnSubmit()
{
  console.log(this.form)
}
OnReset(form:NgForm)
{
    form.reset()
}


}
