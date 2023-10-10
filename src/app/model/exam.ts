export interface ExamGuide {
    exam: Exam
}

export interface Exam extends Displayable {
    name: string
    domains: Array<Domain>
}

export interface Domain extends Displayable {
    id: string
    name: string
    taskStatements: Array<TaskStatement>
}

export interface TaskStatement extends Displayable {
    id: string
    parentId?: string
    knowledgeOf?: Array<SubTask>
    skillsIn?: Array<SubTask>
}

export interface SubTask extends Displayable {
    id?: string
    name?: string
    parentId?: string
}

export interface Displayable {
    content?: string
    name?: string
}