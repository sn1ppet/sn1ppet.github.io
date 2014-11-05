---
layout: post
published: true
author: yannickoo
title: Upload SSH key to server
category: cli
---

{% highlight bash lineos %}
	cat ~/.ssh/id_rsa.pub | ssh USER@HOST "cat - >> ~/.ssh/authorized_keys"
{% endhighlight %}
