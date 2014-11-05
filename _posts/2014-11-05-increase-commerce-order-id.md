---
layout: post
published: true
author: yannickoo
title: Increase Commerce order ID
category: drupal
---

You should increase the auto increment for commerce order ID for production sites:

{% highlight sql lineos %}
ALTER TABLE 'commerce_order' AUTO_INCREMENT = 2243162;
{% endhighlight %}

When you need this in an update hook wrap that query in `db_query`:

{% highlight php lineos %}
<?php

db_query('ALTER TABLE commerce_order AUTO_INCREMENT = 2145172');
{% endhighlight %}
