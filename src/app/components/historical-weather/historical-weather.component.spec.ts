import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalWeatherComponent } from './historical-weather.component';

describe('HistoricalWeatherComponent', () => {
  let component: HistoricalWeatherComponent;
  let fixture: ComponentFixture<HistoricalWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
