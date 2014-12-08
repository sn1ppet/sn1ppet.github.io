---
published: true
layout: post
author: yannickoo
title: Scale videos so that they can fit in their container
category: javascript
---
When you want to scale videos so that they can fit in their container.

{% highlight js lineos %}
$('video.fit').each(function() {
  var $this = $(this);
  var $container = $this.parent();
  var containerWidth = $container.width();
  var containerHeight = $container.height();
 
  $this[0].addEventListener('loadedmetadata', function() {
    var videoWidth = $this[0].videoWidth;
    var videoHeight = $this[0].videoHeight;
 
    var scaleH = containerWidth / videoWidth;
    var scaleV = containerHeight / videoHeight;
    var scale = scaleH > scaleV ? scaleH : scaleV;
 
    videoWidth = scale * videoWidth;
    videoHeight = scale * videoHeight;
 
    $this.width(videoWidth);
    $this.height(videoHeight);
 
    $this.css('margin-left', videoWidth / 2 * -1);
    $this.css('margin-top', videoHeight / 2 * -1);
  });
});
{% endhighlight %}
