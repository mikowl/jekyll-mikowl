---
layout: post
published: true
title: Launch a quick local PHP server in Mavericks
date: 2014-02-12
---

Oftentimes when I'm prototyping a website or just want to tinker I'll launch a quick local server through the terminal with the following:

{% highlight bash %}
cd ~/Sites/MyWebsite
python -m SimpleHTTPServer
{% endhighlight %}

You can then access the website at `http://localhost:8000`. 

OS X Mavericks shipped with PHP 5.4 which introduced a handy [built-in web server](http://www.php.net/manual/en/features.commandline.webserver.php). You can start a PHP server with the following command (hat tip [@davatron5000](https://twitter.com/davatron5000/statuses/393015226657820673)):

{% highlight bash %}
cd ~/Sites/MyWebsite
php -S localhost:8000
{% endhighlight %}

Keep in mind this isn't a full-featured PHP web server with .htaccess support or MySQL, but you can plop in `<?php include("header.php"); ?>` and that sort of thing. It's perfect for testing and situations where you need to fire up a quick demo.

I find myself using this feature nearly every day so I created an alias for it. You can do this by adding `alias srv='php -S localhost:8000` to your .bash_profile. This way you can simply type `srv` to fire up the server. Many times I'll have multiple projects open and need to start a server on a different port so I also have the following function in my .bash_profile:

{% highlight bash %}
function serve {
    php -S localhost:$@ | 
    open -a "Google Chrome" http://localhost:$@
}
{% endhighlight %}

Then you can, for example, type `serve 8888` in the terminal and this will start a server and also launch a chrome window at `http://localhost:8888`. 