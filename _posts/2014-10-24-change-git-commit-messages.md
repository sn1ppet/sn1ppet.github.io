---
layout: post
published: true
author: axe312ger
title: Change Git commit messages
categories: cli
tags: [git, cli, versioning]
---


# Change your last commit message
{% highlight bash lineos %}
git commit --amend -m "Your new message"
{% endhighlight %}

# Change messages of multiple commits

{% highlight bash lineos %}
git rebase -i HEAD~4
{% endhighlight %}

[More details](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)

## Warning:

Do **not** do this if you already pushed your commits and somebody else is working on that project.

If you cannot avoid that, read [this stackoverflow comment](http://stackoverflow.com/questions/4084868/how-do-i-recover-resynchronise-after-someone-pushes-a-rebase-or-a-reset-to-a-pub/4084870#4084870).

