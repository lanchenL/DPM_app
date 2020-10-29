import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRealTimePage } from './detail-real-time.page';

describe('DetailRealTimePage', () => {
  let component: DetailRealTimePage;
  let fixture: ComponentFixture<DetailRealTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRealTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRealTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
