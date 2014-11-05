---
layout: post
published: true
author: yannickoo
title: Transfer files via SCP
category: cli
---

{% highlight bash lineos %}
scp [LOCAL_PATH] [USER]@[ADDRESS]:[PATH]
{% endhighlight %}

Example: Imagine you want to upload your local `foo.tgz` to your server into the `/var/www/` directory do following:

{% highlight bash lineos %}
scp foo.tgz user@123.456.789.012:/var/www/
{% endhighlight %}

In case of directory uploading simply pass `-r`:

{% highlight bash lineos %}
scp -r foo/ user@123.456.789.012:/var/www/
{% endhighlight %}
