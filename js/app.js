$(document).ready(function() {

  // Text selector
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

  selectText($('.highlight:first')[0]);

  // Highlight button
  $('.highlight').each(function() {
    var $this = $(this);

    $this.wrap('<div class="highlight-wrapper"></div>');
    $('<button><span class="octicon octicon-clippy"></span</button>').appendTo($this.parent()).on('click', function() {
      selectText($this[0]);
    });

  });

  // Typeahead
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
          'Feel free to <a href="https://github.com/sn1ppet/sn1ppet.github.io/new/master/_posts">submit</a> a snippet.',
          '</div>'
        ].join('\n'),
        suggestion: function(data){
          return '<p><strong>' + data.title + '</strong> - ' + data.category+ '</p>';
        }
      }
    })
    .on('typeahead:selected', function(obj, datum, name) {
      if (typeof datum.url !== 'undefined') {
        location.href = basePath + datum.url;
      }
    }).focus();

  // Global key watcher
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
    else if (['INPUT', 'TEXTAREA'].indexOf(e.target.nodeName) === -1) {
      var character = String.fromCharCode(e.keyCode);

      if (character.match(/[a-z0-9]/i)) {
        $searchForm.addClass('show').find('.tt-input').val(character).trigger('input').focus();
      }

      e.preventDefault();
    }
  });

  // Ace editor
  $('.ace-editor').each(function () {
    var editor = ace.edit(this);
    editor.getSession().setMode('ace/mode/' + $(this).attr('data-mode'));
    editor.setTheme('ace/theme/monokai');
    editor.setOptions({
      minLines: 3,
      maxLines: 20,
      tabSize: 2
    });
  });
});
