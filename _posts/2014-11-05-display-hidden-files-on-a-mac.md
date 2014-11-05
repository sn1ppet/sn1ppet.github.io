---
layout: post
published: true
author: yannickoo
title: Displays hidden files on a Mac
category: cli
---

To display hidden files on a Mac you simply open your terminal and enter following:

{% highlight bash lineos %}
defaults write com.apple.finder AppleShowAllFiles TRUE
{% endhighlight %}

After this is done you have to restart the Finder:

{% highlight bash lineos %}
killall Finder
{% endhighlight %}

When you want to hide them again execute following:

{% highlight bash lineos %}
defaults write com.apple.finder AppleShowAllFiles FALSE
{% endhighlight %}

Don't forget to restart the Finder again.
