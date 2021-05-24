import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeUsComponent } from './subscribe-us.component';

describe('SubscribeUsComponent', () => {
  let component: SubscribeUsComponent;
  let fixture: ComponentFixture<SubscribeUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
