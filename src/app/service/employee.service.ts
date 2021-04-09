import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  list: Employee[] = [
    {
      id: 1,
      name: 'Agent 1',
      position: 'Belföldi utak szakértője',
      email: 'agent1@gmail.com',
      phone: '20-1234567',
      image: '',
      favoriteDestination: 'Budapest',
    },
    {
      id: 2,
      name: 'Agent 2',
      position: 'Mediterrán utak szakértője',
      email: 'agent2@gmail.com',
      phone: '20-1234567',
      image: '',
      favoriteDestination: 'Horvátország',
    },
    {
      id: 3,
      name: 'Agent 3',
      position: 'Extrém utak szakértője',
      email: 'agent3@gmail.com',
      phone: '20-1234567',
      image: '',
      favoriteDestination: 'Costa Rica',
    },
    {
      id: 4,
      name: 'Agent 4',
      position: 'Különleges utak szakértője',
      email: 'agent4@gmail.com',
      phone: '20-1234567',
      image: '',
      favoriteDestination: 'Mars expedíció',
    },
  ]

  constructor() { }
}
