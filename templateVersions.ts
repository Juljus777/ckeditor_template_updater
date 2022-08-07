import {TemplateVersionsInterface} from "./interfaces";

export const templateVersions:TemplateVersionsInterface[] = [
  {
    'version': 1,
    'templates': [
      {
        'selector': '.cards',
        'listOfActions': [
          {
            'action': 'insert',
            'selector': '.card',
            'content': '<strong>Hello</strong>',
          },
          {
            'action': 'wrapInner',
            'selector': '.card',
            'content': '<div class="red" />',
          },
          {
            'action': 'updateClassName',
            'selector': '.card',
            'className': 'card',
            'updatedClass': 'card--green',
          },
          {
            'action': 'addClassName',
            'selector': '.card--green',
            'className': 'test',
          },
          {
            'action': 'addClassName',
            'selector': '.card--green',
            'className': 'test2',
          },
          {
            'action': 'removeClassName',
            'selector': '.card--green',
            'className': 'test',
          },
        ]
      }
    ]
  },
  {
    'version': 2,
    'templates': [
      {
        'selector': '.cards',
        'listOfActions': [
          {
            'action': 'insert',
            'selector': '.card--green',
            'content': 'Hello V2'
          },
          {
            'action': 'addAttribute',
            'selector': '.card--green',
            'attributeName': 'id',
            'attributeData': 'epic'
          },
          {
            'action': 'removeAttribute',
            'selector': '#epic',
            'attributeName': 'class'
          }
        ]
      }
    ]
  }
]
