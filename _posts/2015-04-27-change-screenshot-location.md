---
layout: post
published: true
author: yannickoo
title: Change screenshot location
category: cli
---

To change the location of your screenshots simply open your terminal and enter following:

{% highlight bash lineos %}
defaults write com.apple.screencapture location ~/Pictures/Screenshots
killall SystemUIServer
{% endhighlight %}

When you want to change it back to Desktop again execute following:

{% highlight bash lineos %}
defaults write com.apple.screencapture location ~/Desktop
killall SystemUIServer
{% endhighlight %}
