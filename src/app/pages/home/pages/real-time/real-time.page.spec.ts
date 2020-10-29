import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealTimePage } from './real-time.page';

describe('RealTimePage', () => {
  let component: RealTimePage;
  let fixture: ComponentFixture<RealTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
