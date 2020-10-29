import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PieDataPage } from './pie-data.page';

describe('PieDataPage', () => {
  let component: PieDataPage;
  let fixture: ComponentFixture<PieDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PieDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
