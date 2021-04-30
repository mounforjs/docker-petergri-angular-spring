import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHobbyComponent } from './new-hobby.component';

describe('NewHobbyComponent', () => {
  let component: NewHobbyComponent;
  let fixture: ComponentFixture<NewHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
