import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBuilderComponent } from './song-builder.component';

describe('SongBuilderComponent', () => {
  let component: SongBuilderComponent;
  let fixture: ComponentFixture<SongBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongBuilderComponent]
    });
    fixture = TestBed.createComponent(SongBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
