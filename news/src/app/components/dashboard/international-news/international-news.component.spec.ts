import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalNewsComponent } from './international-news.component';

describe('InternationalNewsComponent', () => {
  let component: InternationalNewsComponent;
  let fixture: ComponentFixture<InternationalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
