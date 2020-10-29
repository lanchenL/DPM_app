import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonRealTimePage } from './non-real-time.page';

describe('NonRealTimePage', () => {
  let component: NonRealTimePage;
  let fixture: ComponentFixture<NonRealTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRealTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonRealTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
