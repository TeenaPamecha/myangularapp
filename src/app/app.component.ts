import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularapp';
  role:any;
  isLogedin =false;
  inputValue:any;
  user:any={data:{'name':'guest','age':25}};
  isLoginAsAdminMethod(){
    this.role = 'Admin';
    this.isLogedin =true;
    this.user.data = {'name': 'Teena Pamecha', 'age':27}
  }
  isLoginAsEmployeeMethod(){
    this.role = 'Employee';
    this.isLogedin =true;
    this.user.data = {'name': 'Teena Pamecha', 'age':27}
  }
  isLogoutMethod(){
    this.role ='';
    this.isLogedin =false;
    this.user.data = {'name': 'Guest USer', 'age':18}
  }
  getData(val:any){
    this.inputValue = val;
  }
  // @HostListener('click',['$event'])
  // showAlert(){
  //   alert('This is alert box.');
  // }

}
