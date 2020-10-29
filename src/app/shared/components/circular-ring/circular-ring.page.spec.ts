import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircularRingPage } from './circular-ring.page';

describe('CircularRingPage', () => {
  let component: CircularRingPage;
  let fixture: ComponentFixture<CircularRingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularRingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircularRingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
