type Actions = {
  action: 'insert',
  selector: string,
  content: string
} | {
  action: 'wrap' | 'wrapInner',
  selector: string,
  content: string
} | {
  action: 'updateClassName',
  selector: string,
  className: string,
  updatedClass: string
} | {
  action: 'addClassName' | 'removeClassName',
  selector: string,
  className: string
}

export interface TemplateInterface {
  selector: string,
  listOfActions: Actions[],
}

export interface TemplateVersionsInterface {
  version: number,
  templates: TemplateInterface[],
}

