import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterNetworkingComponent } from './twitter-networking.component';

describe('TwitterNetworkingComponent', () => {
  let component: TwitterNetworkingComponent;
  let fixture: ComponentFixture<TwitterNetworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterNetworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
