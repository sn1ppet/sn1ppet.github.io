---
layout: post
published: true
author: yannickoo
title: Include stylesheets via <link> element instead @import
category: drupal
---

Just put this snippet in your theme:

{% highlight php lineos %}
<?php

/**
 * Implements hook_css_alter().
 */
function NAME_css_alter(&$css) {
  foreach ($css as $key => $value) {
    $css[$key]['preprocess'] = FALSE;
  }
}
{% endhighlight %}
