import {Actions} from "./interfaces";

export const actionDictionary:{[key: string]: any} = {
  'insert': ($target:JQuery, actionDefinition:Actions)  => insertAction($target, actionDefinition),
  'wrap': ($target:JQuery, actionDefinition:Actions)  => wrapAction($target, actionDefinition),
  'wrapInner': ($target:JQuery, actionDefinition:Actions)  => wrapInnerAction($target, actionDefinition),
  'updateClassName': ($target:JQuery, actionDefinition:Actions)  => updateClassNameAction($target, actionDefinition),
  'addClassName': ($target:JQuery, actionDefinition:Actions)  => addClassNameAction($target, actionDefinition),
  'removeClassName': ($target:JQuery, actionDefinition:Actions)  => removeClassNameAction($target, actionDefinition),
  'addAttribute': ($target:JQuery, actionDefinition:Actions)  => addAttributeAction($target, actionDefinition),
  'removeAttribute': ($target:JQuery, actionDefinition:Actions)  => removeAttributeAction($target, actionDefinition),
}

function insertAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'insert') {
    $target.append(actionDefinition.content);
  }
}

function wrapAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'wrap') {
    $target.wrap(actionDefinition.content);
  }
}

function wrapInnerAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'wrapInner') {
    $target.wrapInner(actionDefinition.content);
  }
}

function updateClassNameAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'updateClassName') {
    $target.removeClass(actionDefinition.className);
    $target.addClass(actionDefinition.updatedClass);
  }
}

function removeClassNameAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'removeClassName') {
    $target.removeClass(actionDefinition.className);
  }
}

function addClassNameAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'addClassName'){
    $target.addClass(actionDefinition.className);
  }
}

function addAttributeAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'addAttribute') {
    $target.attr(actionDefinition.attributeName, actionDefinition.attributeData);
  }
}

function removeAttributeAction($target:JQuery, actionDefinition:Actions):void {
  if(actionDefinition.action === 'removeAttribute') {
    $target.removeAttr(actionDefinition.attributeName);
  }
}
