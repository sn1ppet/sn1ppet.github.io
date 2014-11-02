---
layout: post
published: true
author: axe312ger
title: responsive facebook widgets
categories: css
tags: [responsive, css, social media, facebook]
---

A little css trick to make the all the Facebook widgets responsive.

{% highlight scss lineos %}
.fb_iframe_widget,
.fb_iframe_widget span,
.fb_iframe_widget span iframe[style] {
  width: 100% !important;
  min-width: 200px;
}
{% endhighlight %}