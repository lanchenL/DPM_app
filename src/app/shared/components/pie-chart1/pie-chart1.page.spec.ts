import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PieChart1Page } from './pie-chart1.page';

describe('PieChart1Page', () => {
  let component: PieChart1Page;
  let fixture: ComponentFixture<PieChart1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChart1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PieChart1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
