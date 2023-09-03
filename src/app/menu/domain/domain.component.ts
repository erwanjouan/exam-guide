import { Component, Input, OnInit } from '@angular/core';
import { Domain } from 'src/app/model/exam';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  @Input() _domain: Domain;

  constructor() { }

  ngOnInit(): void {
  }

}
