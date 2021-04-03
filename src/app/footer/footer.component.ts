import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from '../service/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuItems: IMenuItem[] = this.config.menuItems;


  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
