import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShareComponent } from './content-share.component';

describe('ContentShareComponent', () => {
  let component: ContentShareComponent;
  let fixture: ComponentFixture<ContentShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
