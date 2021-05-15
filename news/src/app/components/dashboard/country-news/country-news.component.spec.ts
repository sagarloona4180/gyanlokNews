import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNewsComponent } from './country-news.component';

describe('CountryNewsComponent', () => {
  let component: CountryNewsComponent;
  let fixture: ComponentFixture<CountryNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
