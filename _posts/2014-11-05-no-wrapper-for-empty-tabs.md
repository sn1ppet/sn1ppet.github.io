---
layout: post
published: true
author: yannickoo
title: No wrapper for empty tabs
category: drupal
---

You know the tabs in Drupal. When you are navigating to a node you can see tabs like "View" and "Edit". These tabs are just links wrapped in an unordered list which are also wrapped in a `<div>` element. The problem here is that the div is printed even if there are no tabs.

Add following function in order to remove tabs wrapper when it is not necessary.

{% highlight php lineos %}
<?php

/**
 * Implements template_preprocess_page().
 */
function THEMENAME_preprocess_page(&$variables) {
  if (!$variables['tabs']['#primary']) {
    $variables['tabs'] = '';
  }
}
{% endhighlight %}
