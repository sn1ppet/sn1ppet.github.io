---
layout: post
published: true
author: yannickoo
title: Open all links in a new tab
category: javascript
---

When you want to open all links in a new tab with jQuery.

{% highlight js lineos %}
$('a').on('click', function () {
  var a = new RegExp('/' + window.location.host + '/');
  if (!a.test(this.href)) {
    $(this).click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.href, '_blank');
    });
  }
});
{% endhighlight %}
