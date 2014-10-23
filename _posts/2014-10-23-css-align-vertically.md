---
layout: post
published: true
author: axeger312
title: css align vertically
category: css
tags: [example tag]
---

Align elements vertically can be tricky. Here are several tricks you can use.

# Inline block without wrapping
{% highlight css lineos %}
.wrapper {
  white-space: nowrap
}

.wrapper > * {
  white-space: normal
  vertical-align: middle
}

.wrapper:before {
  content: ''
  display: inline-block
  height: 100%
  width: 0
}
{% endhighlight %}

## Browser support

{% include caniuse.html features="css-gencontent+inline-block+css-sel2" %}