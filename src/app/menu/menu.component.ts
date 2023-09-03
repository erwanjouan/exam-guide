import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ExamGuideService } from '../service/exam-guide.service';
import { Exam } from '../model/exam';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    _exam:Exam

  constructor(private breakpointObserver: BreakpointObserver, private _examGuideService: ExamGuideService) {}

  ngOnInit(): void {
    this._exam = this._examGuideService.getExam();
  }

}
