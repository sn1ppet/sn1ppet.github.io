---
published: true
layout: post
author: tonekk
title: Get rid of MacOSX persistence
category: macosx
---

We all know it: Restarting your Mac usually results in endless waiting time until all programs have been loaded again.
I don't know what you think, but I'm missing the times when you started up a computer and just had a blank desktop in front of you.
You can have that again!
Just type this in to your terminal and party:

{% highlight js lineos %}
  defaults write -g ApplePersistence -bool no
{% endhighlight %}
