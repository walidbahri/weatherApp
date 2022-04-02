import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataPreviewComponent } from './weather-data-preview.component';

describe('WeatherDataPreviewComponent', () => {
  let component: WeatherDataPreviewComponent;
  let fixture: ComponentFixture<WeatherDataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
