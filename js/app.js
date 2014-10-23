---
---
$(document).ready(function() {

  var basePath = '{{ site.baseurl }}';

  var snippets = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: basePath + '/api/snippets.json'
  });

  snippets.initialize();

  $('#search')
    .typeahead({
      autoselect: true,
      hint: true,
      highlight: true,
      minLength: 1
    }, {
      name: 'snippets',
      displayKey: 'title',
      source: snippets.ttAdapter(),
      templates: {
        empty: [
          '<div class="empty-message">',
          'Feel free to <a href="https://github.com/yannickoo/snippets/compare/">submit</a> a snippet.',
          '</div>'
        ].join('\n'),
        suggestion: Handlebars.compile('<p><strong>{{title}}</strong> – {{category}}</p>')
      }
    })
    .on('typeahead:selected', function(obj, datum, name) {
      if (typeof datum.url !== 'undefined') {
        location.href = basePath + datum.url;
      }
    });
});
