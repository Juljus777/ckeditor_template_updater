"use strict";
//@ts-ignore
/// <reference path="node_modules/@types/jquery/jQuery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
(function ($) {
    //@ts-ignore
    CKEDITOR.plugins.add('template_updater', {
        icons: 'template_updater',
        init: function (editor) {
            var templateVersions = [
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
                },
                {
                    'version': 2,
                    'templates': [
                        {
                            'selector': '.cards',
                            'listOfActions': [
                                {
                                    'action': 'insert',
                                    'selector': '.card',
                                    'content': 'Hello V2'
                                }
                            ]
                        }
                    ]
                }
            ];
            editor.addCommand('updateTemplates', {
                exec: function (editor) {
                    var $context = $('.cke_wysiwyg_frame').contents();
                    // Holy mother of complexity
                    for (var _i = 0, templateVersions_1 = templateVersions; _i < templateVersions_1.length; _i++) {
                        var version = templateVersions_1[_i];
                        var _loop_1 = function (template) {
                            var $templateElements = $context.find(template.selector);
                            $templateElements.each(function () {
                                for (var _i = 0, _a = template.listOfActions; _i < _a.length; _i++) {
                                    var action = _a[_i];
                                    runAction($(this), action);
                                }
                            });
                        };
                        for (var _a = 0, _b = version.templates; _a < _b.length; _a++) {
                            var template = _b[_a];
                            _loop_1(template);
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
    var actionDictionary = {
        'insert': function ($target, actionDefinition) { return insertAction($target, actionDefinition); },
        'wrap': function ($target, actionDefinition) { return wrapAction($target, actionDefinition); },
        'wrapInner': function ($target, actionDefinition) { return wrapInnerAction($target, actionDefinition); },
        'updateClassName': function ($target, actionDefinition) { return updateClassNameAction($target, actionDefinition); },
        'addClassName': function ($target, actionDefinition) { return addClassNameAction($target, actionDefinition); },
        'removeClassName': function ($target, actionDefinition) { return removeClassNameAction($target, actionDefinition); },
    };
    function runAction($targetTemplate, actionDefinition) {
        $targetTemplate.find(actionDefinition.selector).each(function () {
            actionDictionary[actionDefinition.action]($(this), actionDefinition);
        });
    }
})(jQuery);
