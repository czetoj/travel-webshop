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
    { text: 'Home', link: '/travel-webshop', icon: 'home' },
    { text: 'Külföldi utak', link: '/travel-webshop/kulfoldi-utak' },
    { text: 'Belföldi utak', link: '/travel-webshop/belfoldi-utak' },
    { text: 'Kapcsolat', link: '/travel-webshop/kapcsolat' },
    { text: 'Admin', link: '/travel-webshop/admin' },
  ];

  constructor() { }
}