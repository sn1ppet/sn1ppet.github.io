---
---
$(document).ready(function() {

  var basePath = '{{ site.baseurl }}';

  var selectText = function(element) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    }
    else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  $('.highlight').each(function() {
    var $this = $(this);

    $this.wrap('<div class="highlight-wrapper"></div>');
    $('<button>Select</button>').appendTo($this.parent()).on('click', function() {
      selectText($this[0]);
    });

  });

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

    $(document).keyup(function(e) {
      if ($('body').hasClass('front')) {
        return;
      }

      var keyCode = e.which ? e.which : e.keyCode;
      var $searchForm = $('#search-form');

      // @todo
      if ($searchForm.hasClass('show') && keyCode === 27) {
        $searchForm.removeClass('show');
      }
      else if (e.target.id != 'search') {
        var character = String.fromCharCode(e.keyCode);
        $searchForm.addClass('show').find('#search').val(character).trigger('input').focus();

        e.preventDefault();
      }
    });
});
