# How to contribute

## Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* [Create](https://github.com/sn1ppet/sn1ppet.github.io/new/master/_posts) a new file inside the `_posts` directory
* Enter the filename in a format like this `2015-01-24-your-title.md`

As for the content of that file we prepared this one for you:

```
---
published: true
layout: post
author: your github username
title: Your title
category: drupal
---
Enter a description text here.

{% highlight js lineos %}
  (function ($) {

    Drupal.behaviors.namespace = {
      attach: function (context, settings) {
        // Finally add your code snippet :)
      }
    };

  })(jQuery);
{% endhighlight %}
```
