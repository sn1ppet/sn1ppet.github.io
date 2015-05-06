---
layout: post
published: true
title: Drush alias with ssh key
category: Drupal
tags: [Drupal, Shell]
---

Sometimes you need a working Drush alias for your Drupal instance, even when it is on your local machine. Behat testing with the Drush API is a good example for this. Creating a Drush alias for that situation is a little bit complicated, since the user password is unknown in most setups. You need to access the VM via the correct SSH key. Here is how to do this:

First configure your ~/.ssh/config file. This is very easy since Vagrant gives you a copy & paste text snippet for the login credentials. You just need to execute 'vagrant ssh-config'. This might look like this:

  Host default
    HostName 192.168.2.151
    User vagrant
    Port 22
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
    PasswordAuthentication no
    IdentityFile /path/to/vagrant/.vagrant/machines/default/vmware_fusion/private_key
    IdentitiesOnly yes
    LogLevel FATAL

Basically what you need to do is change the Host "default" to something more useful and remember the host, username and the path to the identity file. Just attach it to the end of ~/.ssh/config.

Now create alias file in your Drupal sites directory, for example 'local.alias.drushrc.php'. Now copy the example from below and replace the values with the ones you remembered before and change the root path to match your VM setup.

  <?php
  $aliases['local'] = array(
    'uri' => 'project-url.com',
    'root' => '/var/www/path/to/project/on/the/vm',
    'remote-host' => 'the-host-from-the-ssh-config-file',
    'remote-user' => 'vagrant',
    'ssh-options' => '-o PasswordAuthentication=no -i /path/to/vagrant/.vagrant/machines/default/vmware_fusion/private_key',
  );
