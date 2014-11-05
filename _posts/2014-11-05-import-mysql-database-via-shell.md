---
layout: post
published: true
author: yannickoo
title: Import MySQL database via shell
category: cli
---

{% highlight bash lineos %}
gunzip < dump.sql.gz | mysql -u root -p DATABASE
{% endhighlight %}
