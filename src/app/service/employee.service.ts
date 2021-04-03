import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  list: Employee[] = [
    {
      id: 1,
      name: 'Klára',
      position: 'Belföldi utak szakértője',
      email: 'klari@gmail.com',
      phone: '20-1234567',
      image: 'klari',
      favoriteDestination: 'Pécs',
    },
    {
      id: 2,
      name: 'József',
      position: 'Mediterrán utak szakértője',
      email: 'jozsi@gmail.com',
      phone: '20-1234567',
      image: 'jozsi',
      favoriteDestination: 'Horvátország',
    },
    {
      id: 3,
      name: 'Gergő',
      position: 'Extrém utak szakértője',
      email: 'gergo@gmail.com',
      phone: '20-1234567',
      image: 'gergo',
      favoriteDestination: 'Izland',
    },
    {
      id: 4,
      name: 'János',
      position: 'Különleges utak szakértője',
      email: 'janos@gmail.com',
      phone: '20-1234567',
      image: 'janos',
      favoriteDestination: 'Tatuin bolygó',
    },
  ]

  constructor() { }
}
