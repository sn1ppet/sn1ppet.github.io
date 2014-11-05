---
layout: post
published: true
author: yannickoo
title: Compress and unpack a tar archive
category: cli
---

Create tar archive of a directory:

{% highlight bash lineos %}
tar -cvzf archive.tgz directory
{% endhighlight %}

Create tar archive of files:

{% highlight bash lineos %}
tar -cvzf archive.tgz file1 file2 file3
{% endhighlight %}

To unpack it:

{% highlight bash lineos %}
tar xvzf backup.tgz
{% endhighlight %}
