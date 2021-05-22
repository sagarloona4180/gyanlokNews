import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNewsComponent } from './world-news.component';

describe('StateNewsComponent', () => {
  let component: StateNewsComponent;
  let fixture: ComponentFixture<StateNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
