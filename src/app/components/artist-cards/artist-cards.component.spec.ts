import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCardsComponent } from './artist-cards.component';

describe('ArtistCardsComponent', () => {
  let component: ArtistCardsComponent;
  let fixture: ComponentFixture<ArtistCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
