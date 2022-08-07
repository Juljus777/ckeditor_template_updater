//@ts-ignore
/// <reference path="node_modules/@types/jquery/jQuery.d.ts" />

import { TemplateVersionsInterface, ActionsInterface } from './interfaces';

(function ($) {
  //@ts-ignore
  CKEDITOR.plugins.add('template_updater', {

    icons: 'template_updater',

    init: function (editor:any) {
      let templateVersions:TemplateVersionsInterface[] = [
        {
          'version': 1,
          'templates': [
            {
              'selector': '.cards',
              'listOfActions': [
                {
                  'action': 'insert',
                  'selector': '.card',
                  'content': '<strong>Hello</strong>'
                },
                {
                  'action': 'wrapInner',
                  'selector': '.card',
                  'content': '<div class="red" />'
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
        }
      ]

      editor.addCommand('updateTemplates', {
        exec: function (editor:any):void {
          let $context = $('.cke_wysiwyg_frame').contents();
          // Holy mother of complexity
          for (let version of templateVersions) {
            for (let template of version.templates) {
              let $templateElements = $context.find(template.selector);
              $templateElements.each(function () {
                for (let action of template.listOfActions) {
                  runAction($(this), action);
                }
              })
            }
          }
        }
      })
      editor.ui.addButton('template_updater', {
        id: 'template_updater',
        label: 'Update templates',
        command: 'updateTemplates',
        toolbar: 'template_updater, 10',
      });
    }
  })

  function insertAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.append(actionDefinition.content!);
  }

  function wrapAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.wrap(actionDefinition.content!);
  }

  function wrapInnerAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.wrapInner(actionDefinition.content!);
  }

  function updateClassNameAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.removeClass(actionDefinition.className);
    $target.addClass(actionDefinition.updatedClass!);
  }

  function removeClassNameAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.removeClass(actionDefinition.className);
  }

  function addClassNameAction($target:JQuery, actionDefinition:ActionsInterface):void {
    $target.addClass(actionDefinition.className!);
  }

  const actionDictionary:{[key: string]: any} = {
    'insert': ($target:JQuery, actionDefinition:ActionsInterface) => insertAction($target, actionDefinition),
    'wrap': ($target:JQuery, actionDefinition:ActionsInterface) => wrapAction($target, actionDefinition),
    'wrapInner': ($target:JQuery, actionDefinition:ActionsInterface) => wrapInnerAction($target, actionDefinition),
    'updateClassName': ($target:JQuery, actionDefinition:ActionsInterface) => updateClassNameAction($target, actionDefinition),
    'addClassName': ($target:JQuery, actionDefinition:ActionsInterface) => addClassNameAction($target, actionDefinition),
    'removeClassName': ($target:JQuery, actionDefinition:ActionsInterface) => removeClassNameAction($target, actionDefinition),
  }

  function runAction($targetTemplate:JQuery, actionDefinition:ActionsInterface):void {
    $targetTemplate.find(actionDefinition.selector).each(function () {
      actionDictionary[actionDefinition.action]($(this), actionDefinition);
    });
  }
})(jQuery);


