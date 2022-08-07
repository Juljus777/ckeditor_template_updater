export type Actions = {
  action: 'insert',
  selector: string,
  content: string,
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
} | {
  action: 'addAttribute' | 'removeAttribute',
  selector: string,
  attributeName: string,
  attributeData?: string
}

export interface TemplateInterface {
  selector: string,
  listOfActions: Actions[],
}

export interface TemplateVersionsInterface {
  version: number,
  templates: TemplateInterface[],
}

