---
layout: post
published: true
author: yannickoo
title: Create Display Suite fields programmatically
category: drupal
---

It's easy to provide custom fields for Display Suite:

{% highlight php lineos %}
<?php

/**
 * Implements hook_ds_fields_info().
 */
function MODULE_ds_fields_info($entity_type) {
  $fields = array();

  // New DS field for node types.
  $fields['node']['example'] = array(
    'title' => t('Example'),
    'field_type' => DS_FIELD_TYPE_FUNCTION,
    'function' => 'example',
    'properties' => array(),
  );

  return $fields;
}

/**
 * Render callback for 'Example' field.
 */
function example($field) {
  // $entity = $field['#entity'];
}
{% endhighlight %}
