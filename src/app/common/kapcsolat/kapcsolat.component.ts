import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.scss']
})
export class KapcsolatComponent implements OnInit {

  employeeList: Employee[] = this.employeeService.list;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

}
