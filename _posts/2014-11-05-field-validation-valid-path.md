---
layout: post
published: true
author: yannickoo
title: Field validation for valid path
category: drupal
---

Put following function into your module and you can use it for form elements through a [#element_validate](https://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7#element_validate) entry.

{% highlight php lineos %}
<?php

function element_validate_valid_path($element, &$form_state) {
  $value = $element['#value'];

  if (!drupal_valid_path($value)) {
    form_error($element, t('%name must be a valid path.', array('%name' => $element['#title'])));
  }
}
{% endhighlight %}
