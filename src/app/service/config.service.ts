import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Nyolcas Terminál';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Külföldi utak', link: '/kulfoldi-utak' },
    { text: 'Belföldi utak', link: '/belfoldi-utak' },
    { text: 'Kapcsolat', link: '/kapcsolat' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() { }
}