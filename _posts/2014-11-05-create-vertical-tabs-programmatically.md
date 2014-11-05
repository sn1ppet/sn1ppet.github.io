---
layout: post
published: true
author: yannickoo
title: Create vertical tabs programmatically
category: drupal
---

When you want to create some nice vertical tabs via code you have to do:

{% highlight bash lineos %}
<?php

$element = array(
  '#theme' => 'vertical_tabs',
  '#children' => $fieldsets,
);
{% endhighlight %}

`$fieldsets` can be a string of rendered fieldsets or an array with unrendered fieldsets. [Here](https://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7#fieldset) you can see how a structure of a fieldset form api can look like.
