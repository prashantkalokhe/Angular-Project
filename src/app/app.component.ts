import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsComponent } from './forms/forms.component';
import { Login1Component } from './login1/login1.component';
import { LoginComponent } from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,StudentformComponent,RouterModule,MoviesComponent,FormsComponent,Login1Component,LoginComponent,PipeDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
 
}
