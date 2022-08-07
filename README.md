# Ckeditor 4 template updater

Should be used together with this ckeditor 4 plugin: https://ckeditor.com/cke4/addon/templates

Module for Drupal that adds the ability in the ckeditor 4 editor
to update html markup based on developer created definitions.

## When is it useful

When you manage websites that use ckeditor 4 to deliver content and you have set up templates of html
markup to provide structure to the content you may want to at one point update those templates.
Since it's cumbersome to reinsert the templates manually on every page that uses that template
and then copy over the content from old templates to the new ones it would be much easier to provide
user with a button that does all of those updates automatically.

This is exactly what this plugin does. It changes HTML markup inside ckeditor 4 by running different
kinds of actions. It also provides a way to version these changes since everything is stored in one object.

The actions are predefined and new ones can be added by updating the actionDictionary.

## Current roadmap
1. Add the possibility to run actions on the template itself not only on its content by defining a "self" selector.
2. Optimize the main function by adding versioning through data-version attributes and extra checks.

## How to contribute
Use git flow.
git flow feature start "Some feature"
do your commits
create a pull request

## How to develop
1. You need to get drupal running on your machine
2. Add this repo into your web/modules/custom
3. Enable the module and also make sure the ckeditor uses this plugin by checking out /admin/config/content/formats
4. Enable drupal core/ckeditor module and ckeditor/templates module to run tests.
5. Run "npm run watch" inside the repo folder and start developing
6. Run "npm run build" before commiting the js/plugins/template_updater/plugin.js file.

