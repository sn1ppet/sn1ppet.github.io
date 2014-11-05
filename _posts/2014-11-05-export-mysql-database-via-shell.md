---
layout: post
published: true
author: yannickoo
title: Export MySQL database via shell
category: cli
---

{% highlight bash lineos %}
mysqldump -u USERNAME -p DATABASE | gzip > backup.sql.gz
{% endhighlight %}
