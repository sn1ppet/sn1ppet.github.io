---
layout: post
published: true
title: git alias to recursively update repo with submodules
category: utilities
tags: [git, bash]
---

# Useful git alias to recursively update repo with submodules

{% highlight sh lineos %}
    git config --global alias.up '!sh -c "git pull $@ && git submodule update --init --recursive"'
{% endhighlight %}
