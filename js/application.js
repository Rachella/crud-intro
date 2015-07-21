$(function () {

  var $entries = $('.entries');

  $.ajax({
    type: 'GET',
    url: 'http://ga-wdi-api.meteor.com/api/posts/',
    dataType: 'json',
    success: function(entries) {
      $.each(entries, function(i, entry) {
        $entries.append('<li> id: ' + entry._id + ' title: ' + entry.title + 'text: ' + entry.text + ' user: ' + entry.user + '</li>');
      });
      console.log(entries);
    },
    error: function() {
      console.log('error');
    }
  });

})