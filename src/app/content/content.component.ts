import { Component, OnInit } from '@angular/core';
import { Displayable } from '../model/exam';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExamGuideService } from '../service/exam-guide.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  _toDisplay: Displayable; // content of the subtask to display
  _id: string | null

  constructor(
    private _route: ActivatedRoute,
    private _examGuideService: ExamGuideService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id')
      let examElement = this._examGuideService.getExamElement(this._id)
      this._toDisplay = examElement == undefined ? { content: '' } : examElement
    });
  }

}
