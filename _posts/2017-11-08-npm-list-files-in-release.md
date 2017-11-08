---
published: true
layout: post
author: zcei
title: List of files that are released in a specific version of a package on npm
category: javascript
---
Great for general package debugging, e.g. checking for typings, source maps, etc. in a package version.

{% highlight sh lineos %}
curl $(npm info <package>@<version> dist.tarball) | tar t
{% endhighlight %}
