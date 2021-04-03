import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
