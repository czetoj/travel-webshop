import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigTableService {

  tableCols: ITableCol[] = [
    { key: "uid", text: "#", editable: false },
    { key: "catId", text: "CatId", editable: true },
    { key: "name", text: "Name", editable: true },
    { key: "description", text: "Description", editable: true },
    { key: "image", text: "Image", editable: true },
    { key: "price", text: "Price", editable: true },
    { key: "salesPrice", text: "Salesprice", editable: true },
    { key: "stock", text: "Stock", editable: true },
    { key: "featured", text: "Featured", editable: true },
    { key: "featured2", text: "Featured2", editable: true },
    { key: "active", text: "Active", editable: true },

  ]

  constructor() { }
}
