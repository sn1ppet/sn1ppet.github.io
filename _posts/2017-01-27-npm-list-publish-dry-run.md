---
published: true
layout: post
author: zcei
title: List of files that would be released to npm
category: javascript
---
Great for debugging `.npmignore`
(It generates a tarball in your module folder!)

{% highlight sh lineos %}
  tar -tf $(npm pack)
{% endhighlight %}
