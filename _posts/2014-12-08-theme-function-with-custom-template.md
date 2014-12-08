---
published: true
layout: post
author: yannickoo
title: Theme function with custom template file
category: drupal
---
When you want to add a theme function which uses a custom template file.

{% highlight php lineos %}
<?php

/**
 * Implements hook_theme().
 */
function MYMODULE_theme($existing, $type, $theme, $path) {
  return array(
    'summary' => array(
      'render element' => 'elements',
      'template' => 'summary',
    ),
  );
}

function template_preprocess_summary(&$variables) {
  $variables['regions'] = $variables['elements']['#regions'];
}
{% endhighlight %}

Now you can put following in your `summary.tpl.php`:

{% highlight php lineos %}
<div class="summary">
  <div class="left">
    <?php print render($regions['left']); ?>
  </div>
  <div class="middle">
    <?php print render($regions['middle']); ?>
  </div>
  <div class="right">
    <?php print render($regions['right']); ?>
  </div>
</div>
{% endhighlight %}
