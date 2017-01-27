---
published: true
layout: post
author: zcei
title: Check if Python project contains a certain dependency / module
category: python
---
Great for requirement checks in bash.
Just run and check the exit code.

{% highlight sh lineos %}
  python -m package.submodule > /dev/null 2>&1
{% endhighlight %}
