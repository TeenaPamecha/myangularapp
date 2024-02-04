import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs:['employeeData']
})
export class EmployeeComponent {
  employeeData:any;
  allEmployeeDetail:any=[
    {'id':1,'name':'Teena','age':27},
    {'id':2,'name':'Divya','age':25},
    {'id':3,'name':'Ravi','age':24},
    {'id':4,'name':'Dilip','age':29},
    {'id':5,'name':'Raja','age':31},
  ];

}
