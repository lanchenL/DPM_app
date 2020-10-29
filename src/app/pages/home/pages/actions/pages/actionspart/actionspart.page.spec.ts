import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionspartPage } from './actionspart.page';

describe('ActionspartPage', () => {
  let component: ActionspartPage;
  let fixture: ComponentFixture<ActionspartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionspartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionspartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
