---
published: true
layout: post
author: zcei
title: Apart Library From Repo
category: git
---

Sometimes you get an library "by the way" while working on something bigger.
The usual step is to copy it to a new repository and do an initial commit.

But wouldn't it be cooler to preserve the git history - and *only* the history affecting the library files?
Yes:

{% highlight js lineos %}
git clone /path/to/repo /path/to/new/repo/
cd /path/to/new/repo/
git filter-branch --subdirectory-filter lib/my-fancy-lib/ -- master
{% endhighlight %}

Now you have a history just containing everything related to your lib in the `master` branch

In case you want to wipe all traces of the library development in your old repo:

*(WARNING!: This rewrites your history and may affect collaborators)*

{% highlight js lineos %}
  git filter-branch --index-filter "git rm -r --cached --ignore-unmatch lib/my-fancy-lib" --prune-empty
{% endhighlight %}
