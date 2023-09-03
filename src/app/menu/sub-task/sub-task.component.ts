import { Component, Input, OnInit } from '@angular/core';
import { SubTask } from 'src/app/model/exam';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit {
    
  @Input() _subTask:SubTask

  @Input() _ref:string

  constructor() { }

  ngOnInit(): void {
  }

}
