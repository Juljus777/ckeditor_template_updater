"use strict";
//@ts-ignore
/// <reference path="node_modules/@types/jquery/jQuery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
(function ($) {
    //@ts-ignore
    CKEDITOR.plugins.add('template_updater', {
        icons: 'template_updater',
        init: function (editor) {
            let templateVersions = [
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
            ];
            editor.addCommand('updateTemplates', {
                exec: function (editor) {
                    let $context = $('.cke_wysiwyg_frame').contents();
                    // Holy mother of complexity
                    for (let version of templateVersions) {
                        for (let template of version.templates) {
                            let $templateElements = $context.find(template.selector);
                            $templateElements.each(function () {
                                for (let action of template.listOfActions) {
                                    runAction($(this), action);
                                }
                            });
                        }
                    }
                }
            });
            editor.ui.addButton('template_updater', {
                id: 'template_updater',
                label: 'Update templates',
                command: 'updateTemplates',
                toolbar: 'template_updater, 10',
            });
        }
    });
    function insertAction($target, actionDefinition) {
        $target.append(actionDefinition.content);
    }
    function wrapAction($target, actionDefinition) {
        $target.wrap(actionDefinition.content);
    }
    function wrapInnerAction($target, actionDefinition) {
        $target.wrapInner(actionDefinition.content);
    }
    function updateClassNameAction($target, actionDefinition) {
        $target.removeClass(actionDefinition.className);
        $target.addClass(actionDefinition.updatedClass);
    }
    function removeClassNameAction($target, actionDefinition) {
        $target.removeClass(actionDefinition.className);
    }
    function addClassNameAction($target, actionDefinition) {
        $target.addClass(actionDefinition.className);
    }
    const actionDictionary = {
        'insert': ($target, actionDefinition) => insertAction($target, actionDefinition),
        'wrap': ($target, actionDefinition) => wrapAction($target, actionDefinition),
        'wrapInner': ($target, actionDefinition) => wrapInnerAction($target, actionDefinition),
        'updateClassName': ($target, actionDefinition) => updateClassNameAction($target, actionDefinition),
        'addClassName': ($target, actionDefinition) => addClassNameAction($target, actionDefinition),
        'removeClassName': ($target, actionDefinition) => removeClassNameAction($target, actionDefinition),
    };
    function runAction($targetTemplate, actionDefinition) {
        $targetTemplate.find(actionDefinition.selector).each(function () {
            actionDictionary[actionDefinition.action]($(this), actionDefinition);
        });
    }
})(jQuery);
