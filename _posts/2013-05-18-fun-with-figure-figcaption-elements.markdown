---
layout: post
title: "Fun with figure & figcaption elements"
date: 2013-05-18 06:29
comments: true
tags: HTML5, CSS
style: |
  figure {
    position:relative;
    max-width:400px;
  }

  figcaption {
    position:absolute;
    bottom:0;
    left:0;
    -webkit-box-sizing: border-box; 
       -moz-box-sizing: border-box; 
            box-sizing: border-box;
    width:100%;
    padding:0.875em;
    color:#FFF;
    font-size:0.9em;
    font-family: 'Source Sans Pro', sans-serif;
    background: #000000; /* Fallback color */
    background: rgba(0, 0, 0, .6);
    text-shadow:1px 1px 0 rgba(0, 0, 0, 0.5);
  }
---

It's nice having the new HTML5 elements figure & figcaption to semantically markup a picture with a caption. The W3C describes the element as follows:

<blockquote cite="http://www.w3.org/TR/html-markup/figure.html">The figure element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without affecting the document’s meaning.</blockquote>

And here's a snippet on how to get a caption that sits over the bottom of the photo as shown below:

<figure>
  <img src="/images/mfcottoncandy.jpg" alt="Morgan Freeman Holding Cotton Candy">
  <figcaption>Morgan Freeman Holding Cotton Candy.</figcaption>
</figure>

###The Markup:

{% highlight html %}
<figure>
  <img src="/images/yourimage.jpg" alt="Image description">
  <figcaption>This is a caption</figcaption>
</figure>
{% endhighlight %}

###The CSS:
 {% highlight css %}
 /* Relatively position the figure so we can absolutely position 
    the caption over the photo */
figure {
  position: relative;
  max-width: 400px;
}

figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-box-sizing: border-box; 
     -moz-box-sizing: border-box; 
          box-sizing: border-box;
  width: 100%;
  padding: 20px;
  color: #FFF;
  background: #000000; /* Fallback color */
  background: rgba(0, 0, 0, .6);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
}
{% endhighlight %}