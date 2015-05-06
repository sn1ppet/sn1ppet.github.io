---
layout: post
published: true
title: sn1ppet demonstration
category: various
tags: [example]
---

This is simple page demonstrates all markdown related features of sn1ppet.

# Simple code highlighting

{% highlight html lineos %}
<figure>
  <img src="kitten.jpg" alt="Fancy kitten" width="300" height="200">
  <figcaption>Ohh my god, it is a kitten.</figcaption>
</figure>
{% endhighlight %}

# Live code editing with ace editor

{% include ace-editor.html mode="javascript" %}
function foo(items, nada) {
  for (var i=0; i<items.length; i++) {
    alert(items[i] + "juhu\n");
  }
}
{% include closingdiv.html %}

# Display browser support via caniuse.com widgets

{% include caniuse.html features="cryptography+transforms3d+rtcpeerconnection" %}

# Embed JSFiddle code snippets

{% include jsfiddle.html id="0dpqm8d0/2" tabs="result,html,css" height="370" %}

# Use MathJaX to display mathematical formulars

\\[16:9 = \frac{9}{16} * 100 \\]