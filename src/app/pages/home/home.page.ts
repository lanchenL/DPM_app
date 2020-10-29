import { EVENTApi } from './../../services/sdk/services/custom/EVENT';
import { Component, OnInit } from '@angular/core';
import { USERApi } from 'src/app/services/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items = ['a', 'b'];
  constructor(
  ) { }

  async ngOnInit() {
  }

}
