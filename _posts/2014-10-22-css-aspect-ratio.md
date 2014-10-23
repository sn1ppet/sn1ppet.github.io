---
published: true
layout: post
category: css
tags: [responsive, css]
---
Force a dom element to keep a specified aspect ratio. This is very helpful in responsive design.

This relies on the relation of the padding parameter to the elements width.

## Calculation formula:

Here is an example how to calculate the percentage of the padding bottom for a 16:9 aspect ratio.

\\[16:9 = \frac{9}{16} * 100 \\]

### Example ratios:
* 1:1 = 100%
* 1:2 = 200%
* 2:1 = 50%
* 3:2 = 66.6666%
* 4:3 = 75%;
* 16:9 = 56.25%
* 21:9 = 42.8571%


# Example
Resize the page to see it in action.

{% include jsfiddle.html id="0dpqm8d0/2" tabs="result,html,css" height="370" %}

# CSS
{% highlight css lineos %}
.responsive-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 75%; // You can also use padding-top
}
.responsive-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
{% endhighlight %}

# HTML
{% highlight html lineos %}
<div class="responsive-wrapper">
  <div class="responsive-content">
    <!-- @todo add content -->
  </div>
</div>
{% endhighlight %}

# SASS mixin
{% highlight scss lineos %}
// Keep a specified aspect ratio.
// E.g. @include box-aspect-ratio(16/9);
@mixin box-aspect-ratio($ratio: 2) {
  $gap: 100 / $ratio;
  width: 100%;
  height: 0;
  padding-bottom: #{$gap + "%"};
}

// Shorthand mixin for the child element.
@mixin fill-parent() {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
{% endhighlight %}
