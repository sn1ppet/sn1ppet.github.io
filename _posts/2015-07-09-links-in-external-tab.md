---
layout: post
published: true
author: yannickoo
title: Open external links in new tab
category: drupal
---

You need it everytime when your client needs it.

{% highlight js lineos %}
$('a[href]').each(function() {
  var a = new RegExp('/' + window.location.host + '/');
  if (!a.test(this.href)) {
    $(this).click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.href, '_blank');
    });
  }
});
{% endhighlight %}
