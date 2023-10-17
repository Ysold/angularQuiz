import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDifficultyComponent } from './button-difficulty.component';

describe('ButtonDifficultyComponent', () => {
  let component: ButtonDifficultyComponent;
  let fixture: ComponentFixture<ButtonDifficultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDifficultyComponent]
    });
    fixture = TestBed.createComponent(ButtonDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
