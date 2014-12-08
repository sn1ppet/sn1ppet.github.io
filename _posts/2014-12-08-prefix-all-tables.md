---
published: true
layout: post
author: yannickoo
title: prefix all tables in a database
category: mysql
---
When you want to prefix all tables within a database.

{% highlight sql lineos %}
SET group_concat_max_len=100000;
SELECT CONCAT('ALTER TABLE ', TABLE_NAME, ' RENAME TO prefix_', TABLE_NAME, ';') FROM information_schema.tables WHERE table_schema = 'my_database';
{% endhighlight %}
