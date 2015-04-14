---
published: true
layout: post
author: tonekk
title: Disable MacOSX umlaut feature
category: macosx
---

For some reason Apple decided to add a silly feature to MacOSX that prevents us from spamming people.
I am talking about the 'umlaut feature' (hold down a key and you will be able to insert umlauts).
But luckily there is an easy way to disable it.
Just type this in to your terminal, restart and start spamming:

{% highlight js lineos %}
  defaults write -g ApplePressAndHoldEnabled -bool false
{% endhighlight %}
