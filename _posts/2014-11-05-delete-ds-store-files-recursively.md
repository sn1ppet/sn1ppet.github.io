---
layout: post
published: true
author: yannickoo
title: Delete .DS_Store files recursively
category: cli
---

{% highlight bash lineos %}
find . -name '*.DS_Store' -type f -delete
{% endhighlight %}
