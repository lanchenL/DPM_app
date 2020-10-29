import { title } from 'process';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input() title: string;
  @Input() overdue: string;
  @Input() open: string;
  @Input() ongoing: string;
  @Input() hideLabels = false;
  @Input() hiderectangle = false;

  @Input() overdue1: string;
  @Input() open1: string;
  @Input() ongoing1: string;

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
  }



}

