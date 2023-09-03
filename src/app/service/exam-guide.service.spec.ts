import { TestBed } from '@angular/core/testing';

import { ExamGuideService } from './exam-guide.service';

describe('ExamGuideService', () => {
  let service: ExamGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
