---
layout: post
published: true
author: axe312ger
title: Responsive YouTube embed
categories: css
tags: [responsive, css, social media, youtube]
---

To make the youtube video iframe responsive, just force a wrapping container to the desired aspect ratio and tell the iframe to fill the container.

# css
{% highlight css lineos %}
.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* default youtube aspect ratio */
}

.video-wrapper iframe,
.video-wrapper object,
.video-wrapper embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
{% endhighlight %}

# scss

With some help from the [css aspect ratio snippet]({{ site.baseurl }}{% post_url 2014-10-22-css-aspect-ratio %}) this is very easy in sass.

{% highlight scss lineos %}
.video-wrapper {
  @include box-aspect-ratio(420/315); // Just use the pixel dimensions of the "original" size

  iframe,
  object,
  embed {
    @include fill-parent();
  }
}
{% endhighlight %}
