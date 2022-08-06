<?php

namespace Drupal\template_updater\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "Template Updater" plugin.
 *
 * @CKEditorPlugin(
 *   id = "template_updater",
 *   label = @Translation("CKEditor Template Updater"),
 *   module = "template_updater"
 * )
 */

class TemplateUpdater extends CKEditorPluginBase {

  /**
   * @inheritDoc
   */
  public function getButtons()
  {
    return [
      'template_updater' => [
        'label' => t('CKEditor Template Updater'),
        'image' => $this->getLibraryPath() . '/icons/template_updater.png',
      ]
    ];
  }

  /**
   * @inheritDoc
   */
  public function getFile()
  {
    return $this->getLibraryPath() . '/plugin.js';
  }

  /**
   * @inheritDoc
   */
  public function getConfig(Editor $editor)
  {
    return [];
  }

  public static function getLibraryPath()
  {
    return
      \Drupal::service('extension.list.module')->getPath('template_updater') .
      '/js/plugins/template_updater';
  }
}
