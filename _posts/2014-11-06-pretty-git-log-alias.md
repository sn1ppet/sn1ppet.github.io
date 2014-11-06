---
layout: post
published: true
title: pretty git log alias
category: utilities
tags: [git, bash]
---

Create a pretty git log output in your terminal

# Simple code highlighting

{% highlight bash lineos %}
    git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"#
{% endhighlight %}

