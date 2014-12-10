---
published: true
layout: post
author: yannickoo
title: Remove paths for entities created through ECK
category: drupal
---
When you want to disable paths for entities created through the [ECK](https://www.drupal.org/project/eck) module.

{% highlight php lineos %}
  <?php
  
  /**
   * Implements hook_menu_alter().
   */
  function MYMODULE_menu_alter(&$items) {
    $entity_type = 'your_entity_type';
    $entity_info = entity_get_info($entity_type);
  
    // Iterate all $entity_type types and make them 404.
    foreach ($entity_info['bundles'] as $bundle_name => $bundle) {
      // Return 404 for entity views.
      $items['content_box/' . $bundle_name . '/%eckentity']['page callback'] = 'MYMODULE_page_not_found';
      // Remove "View" tab.
      unset($items['content_box/' . $bundle_name . '/%eckentity/view']);
    }
  }
  
  /**
   * Page callback for showing a 404.
   */
  function MYMODULE_page_not_found() {
    return MENU_NOT_FOUND;
  }
{% endhighlight %}
