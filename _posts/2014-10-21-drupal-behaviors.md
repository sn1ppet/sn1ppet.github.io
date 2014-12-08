---
published: true
layout: post
author: yannickoo
title: Drupal Behaviors
category: drupal
---
Great for starting with new JavaScript file.

{% highlight js lineos %}
  (function ($) {

    Drupal.behaviors.namespace = {
      attach: function (context, settings) {
        // TODO: Write code
      }
    };

  })(jQuery);
{% endhighlight %}
