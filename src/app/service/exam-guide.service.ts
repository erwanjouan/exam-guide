import { Injectable } from '@angular/core';
import { Displayable, Domain, Exam, ExamGuide, SubTask, TaskStatement } from '../model/exam';
import exam from '../../assets/exam.json';
import { MarkdownService } from 'ngx-markdown';

@Injectable({
  providedIn: 'root'
})
export class ExamGuideService {

  private examGuide: ExamGuide;
  
  constructor(private _markdownService: MarkdownService) {
    this.examGuide = exam    
  }

  getContent(id: string | null): Displayable | undefined {
    if (id != undefined) {
      let splitted = id.split(".")
      if (splitted.length == 0) {
        return this.getMarkdown(this.getDomain(id));
      } else if (splitted.length == 1) {
        return this.getMarkdown(this.getDomain(id));
      } else if (splitted.length == 2) {
        return this.getMarkdown(this.getTaskStatement(splitted[0], splitted[1]))
      } else if (splitted.length == 4) {
        return this.getMarkdown(this.getSubTask(splitted[0], splitted[1], splitted[2], splitted[3]))
      }
    }
    return this.getExam();
  }

  getExam(): Exam {
    return this.examGuide.exam
  }

  getDomain(domainId: string): Domain | undefined {
    return this.examGuide.exam.domains.find(domain => domainId == domain.id)
  }

  getTaskStatement(domainId: string, taskStatementId: string): TaskStatement | undefined {
    let domain = this.getDomain(domainId);
    if (domain != undefined) {
      return domain.taskStatements.find(taskStatement => domainId + '.' + taskStatementId == taskStatement.id)
    }
    return undefined
  }

  getSubTaskFromId(subTaskId: string): SubTask | undefined {
    let splitted = subTaskId.split(".")
    return this.getSubTask(splitted[0], splitted[1], splitted[2], splitted[3])
  }

  getSubTask(domainId: string, taskStatementId: string, type: string, subTaskId: string): SubTask | undefined {
    let taskStatement = this.getTaskStatement(domainId, taskStatementId)
    if (taskStatement != undefined) {
      let taskId = Number(subTaskId)
      return type == "K" ? taskStatement.knowledgeOf[taskId] : taskStatement.skillsIn[taskId]
    }
    return undefined;
  }

  
  getMarkdown(input: Displayable | undefined): Displayable | undefined {
    if (input == undefined) {
      return { 'name': '', 'content': '' }
    } else {
      let toReturn = { ...input }
      toReturn.content = input.content == undefined ? input.content : this._markdownService.compile(input.content)
      return toReturn;
    }
  }
}
