---
layout: post
published: true
author: yannickoo
title: Reset Drupal 7 password
category: drupal
---

Hint: When you can use [Drush](https://github.com/drush-ops/drush) just use `drush uli`.

You probably know the situation where you need to reset a Drupal 7 password. For that case you simply change Drupal's index.php to following:

{% highlight php lineos %}
<?php

define('DRUPAL_ROOT', getcwd());

require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

require_once 'includes/password.inc';
echo user_hash_password('changeMe!');
die();

menu_execute_active_handler();
{% endhighlight %}

After you did that you can open your Drupal website and see a salted hash instead of the plain text password.

Login into your database and browse to the `user` table. Now you can search for the user (administrator account) and set the password` value to the displayed hash.

This can be also achieved by executing this command:

{% highlight bash lineos %}
UPDATE user SET password = 'displayed hash';
{% endhighlight %}
