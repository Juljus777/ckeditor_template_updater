//@ts-ignore
/// <reference path="node_modules/@types/jquery/jQuery.d.ts" />

import {Actions} from './interfaces';
import {actionDictionary} from "./actions";
import {templateVersions} from "./templateVersions";

(function ($) {
  //@ts-ignore
  CKEDITOR.plugins.add('template_updater', {

    icons: 'template_updater',

    init: function (editor: any) {

      editor.addCommand('updateTemplates', {
        exec: function (editor: any): void {
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

  function runAction($targetTemplate: JQuery, actionDefinition: Actions): void {
    if(actionDefinition.selector !== 'root') {
      $targetTemplate = $targetTemplate.find(actionDefinition.selector);
    }
      $targetTemplate.each(function () {
        actionDictionary[actionDefinition.action]($(this), actionDefinition);
      });

  }
})(jQuery);


