---
layout: post
published: true
author: axe312ger
title: CSS align vertically
category: css
tags: [example tag]
---

Align elements vertically can be tricky. Here are several tricks you can use.

# Inline block without wrapping

{% include ace-editor.html mode="css" %}
.wrapper {
  white-space: nowrap;
}

.wrapper > * {
  display: inline-block;
  white-space: normal;
  vertical-align: middle;
}

.wrapper:before {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
{% include closingdiv.html %}

## Browser support

{% include caniuse.html features="css-gencontent+inline-block+css-sel2" %}
