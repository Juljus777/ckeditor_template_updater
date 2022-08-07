export interface ActionsInterface {
  action: string,
  selector: string,
  content: string
  className: string,
  updatedClass: string,
}

export interface TemplateInterface {
  selector: string,
  listOfActions: ActionsInterface[],
}

export interface TemplateVersionsInterface {
  version: number,
  templates: TemplateInterface[],
}


