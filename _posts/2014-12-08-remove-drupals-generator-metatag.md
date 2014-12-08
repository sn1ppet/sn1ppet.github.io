---
published: true
layout: post
author: yannickoo
title: Remove Drupal's generator metatag
category: mysql
---
When you want to remove Drupal's generator metatag.

{% highlight php lineos %}
<?php

/**
 * Implements hook_html_head_alter().
 */
function MYMODULE_html_head_alter(&$head_elements) {
  if (isset($head_elements['system_meta_generator'])) {
    unset($head_elements['system_meta_generator']);
  }
}
{% endhighlight %}
