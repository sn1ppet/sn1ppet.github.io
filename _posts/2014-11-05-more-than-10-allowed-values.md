---
layout: post
published: true
author: yannickoo
title: More than 10 allowed values
category: drupal
---

The moment when the client wants more than 10 allowed values (but not unlimited) for a field:

{% highlight php lineos %}
<?php

/**
 * Implements hook_form_alter().
 */
function MODULENAME_form_alter(&$form, $form_state, $form_id) {
  if ($form_id == 'field_ui_field_edit_form') {
    $max_values = 20;
    $form['field']['cardinality']['#options'] = array('-1' => t('Unlimited')) + drupal_map_assoc(range(1, $max_values));
  }
}
{% endhighlight %}
