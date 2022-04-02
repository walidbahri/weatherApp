import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedLocationsComponent } from './bookmarked-locations.component';

describe('BookmarkedLocationsComponent', () => {
  let component: BookmarkedLocationsComponent;
  let fixture: ComponentFixture<BookmarkedLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
