$(document).ready(function() {

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, obj) {
        if (substrRegex.test(obj.value) || substrRegex.test(obj.category)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push(obj);
        }
      });

      cb(matches);
    };
  };

  var snippets = [
    {
      value: 'hook_page_build',
      category: 'Drupal'
    },
    {
      value: 'hook_form_alter',
      category: 'Drupal'
    },
    {
      value: 'drupal behaviors',
      category: 'Drupal',
      url: '2014/10/21/drupal-behaviors.html'
    },
    {
      value: 'vertical align',
      category: 'CSS'
    }
  ];

  $('#search').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'snippets',
    displayKey: 'value',
    source: substringMatcher(snippets),
    templates: {
    empty: [
      '<div class="empty-message">',
      'Feel free to <a href="https://github.com/yannickoo/snippets/compare/">submit</a> a snippet.',
      '</div>'
    ].join('\n'),
    suggestion: Handlebars.compile('<p><strong>{{value}}</strong> – {{category}}</p>')
  }
  });

});
