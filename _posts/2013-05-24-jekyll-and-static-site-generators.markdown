---
layout: post
title: "Jekyll and static site generators"
date: 2013-05-24 07:46
comments: true
tags: jekyll, tools
---

At [work](http://tmdcreative.com "TMD") I maintain and develop a number of sites with various content management systems (the majority being [WordPress](http://wordpress.com/ "WordPress") and [ExpressionEngine](http://expressionengine.com "ExpressionEngine")). For my own site I wanted to geek out a bit and take the opportunity to try something different. A full blown CMS is overkill for what I needed so I decided to use a [static site generator](http://www.mickgardner.com/2012/12/an-introduction-to-static-site.html"An Introduction to Static Site Generators").  [There's a bunch](https://gist.github.com/2254924 "List of static site generators") of great ones out there. I started playing with [Octopress](http://octopress.org/ "Octopress"), which is awesome but ultimately I wanted something more bare bones and to create a design from scratch so I ended up going with plain [jekyll](http://jekyllrb.com "Jekyll").

>Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server. 

<img src="/images/jekyll-logo.png" alt="Jekyll">

###Benefits of using a static site generator

- **Speed** Content management systems can be slow and you really have to spend time tweaking things to speed them up.   Not having to deal with databases, piles of PHP, plugins, keeping things up to date, etc. is awesome. Servering static html files is about as fast and simple as it gets.
- **Security** No databases or server side code also means a lot less worrying about spam and security issues.
- The writing workflow is a joy, posts are written in [Markdown](http://daringfireball.net/projects/markdown/ "Markdown") in my favorite text editor. 
-  I'm trying to get into the groove of using version control in my projects, this was a great opportunity to utilize a more modern workflow using [Git](http://git-scm.com/ "Git") and [GitHub](http://github.com "GitHub"). When I'm finished writing a post I run `jekyll serve`, check the site locally then push & deploy.
- It's fun and all the [cool](http://www.paulirish.com/) [kids](http://daverupert.com/) are doing it.

So here it is, you can take a look at the source [here](https://github.com/mikowl/jekyll-mikowl "Mikowl's Jekyll Site") on github if you'd like. 


