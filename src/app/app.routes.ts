import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';
import { LoginComponent } from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { MoviesComponent } from './movies/movies.component';
import { Login1Component } from './login1/login1.component';
import { FormsComponent } from './forms/forms.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialFormComponent } from './material-form/material-form.component';


export const routes: Routes = [
    { path:"home",component:HomeComponent },
    {  path:"login",component:LoginComponent },
    {  path:"studentform",component:StudentformComponent},
    {path:"pipe-demo",component:PipeDemoComponent},
    {path:"movies",component:MoviesComponent},
    {  path:"login1",component:Login1Component },
    {  path:"forms",component:FormsComponent },
    {  path:"material-demo",component:MaterialDemoComponent },
    {  path:"material-form",component:MaterialFormComponent }



];
