import { Component, Input, OnInit } from '@angular/core';
import { TaskStatement } from 'src/app/model/exam';

@Component({
  selector: 'app-task-statement',
  templateUrl: './task-statement.component.html',
  styleUrls: ['./task-statement.component.css']
})
export class TaskStatementComponent implements OnInit {

  @Input() _taskStatement: TaskStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
