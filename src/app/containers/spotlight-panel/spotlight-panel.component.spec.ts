import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightPanelComponent } from './spotlight-panel.component';

describe('SpotlightPanelComponent', () => {
  let component: SpotlightPanelComponent;
  let fixture: ComponentFixture<SpotlightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
