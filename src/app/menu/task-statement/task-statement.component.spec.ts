import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatementComponent } from './task-statement.component';

describe('TaskStatementComponent', () => {
  let component: TaskStatementComponent;
  let fixture: ComponentFixture<TaskStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
