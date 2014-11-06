require 'time'

desc 'create a new draft post'
task :post do
    title = ENV['TITLE']
    slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

    file = File.join(
        File.dirname(__FILE__),
        '_posts',
        slug + '.md'
    )

    File.open(file, "w") do |f|
        f << <<-EOS.gsub(/^     /, '')
---
layout: post
published: true
title: #{title}
category: various
tags: [example tag1, example tag2]
---

        EOS
    end

    system ("#{ENV['EDITOR']} #{file}")
end
