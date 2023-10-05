import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPKComponent } from './epk.component';

describe('EPKComponent', () => {
  let component: EPKComponent;
  let fixture: ComponentFixture<EPKComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EPKComponent]
    });
    fixture = TestBed.createComponent(EPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
